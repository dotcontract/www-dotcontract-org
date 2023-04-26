// /* eslint-disable filenames/match-regex */
import { existsSync, readFileSync } from "fs";
import { URL } from "url";
import { Arcdown } from "arcdown";
import arcStaticImg from "markdown-it-arc-static-img";
import HljsLineWrapper from "../../helpers/hljs-line-wrapper.mjs";

const arcdown = new Arcdown({
  pluginOverrides: {
    markdownItToc: {
      containerClass: "toc mb2 ml-2",
      listType: "ul",
    },
  },
  plugins: [arcStaticImg],
  hljs: {
    sublanguages: { javascript: ["xml", "css"] },
    plugins: [new HljsLineWrapper({ className: "code-line" })],
  },
});

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(request) {
  const gacode = process.env.ARC_ENV === "production" ? "G-TODO" : "G-TODO";

  const { path: activePath } = request;
  let docPath = activePath.replace(/^\/?blog\/{0,1}/, "");
  let docURL = new URL(`../../pages/blog/${docPath}/index.md`, import.meta.url);
  if (!existsSync(docURL.pathname)) {
    if (existsSync(docURL.pathname)) {
      return {
        status: 302,
        location: `${activePath}/`,
      };
    }
  }

  let postMarkdown;
  try {
    postMarkdown = readFileSync(docURL.pathname, "utf-8");
  } catch (_err) {
    let searchTerm = null;
    const initialState = {
      post: {
        title: "404",
        path: docPath,
        html: `<docs-404 search-term="${searchTerm}"></docs-404>`,
      },
      gacode,
    };

    return { statusCode: 404, json: initialState };
  }
  const post = await arcdown.render(postMarkdown);

  const initialState = {
    pageSubtitle: post?.title,
    post,
    gacode,
  };

  let cacheControl =
    process.env.ARC_ENV === "production"
      ? "max-age=3600;"
      : "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0";

  return {
    cacheControl,
    json: initialState,
  };
}
