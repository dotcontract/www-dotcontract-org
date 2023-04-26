// /* eslint-disable filenames/match-regex */
import { existsSync, readFileSync, readdirSync } from "fs";
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

  const blogdir_filenames = readdirSync(new URL(`../../pages/blog`, import.meta.url));
  const blog_posts = [];
  for (const fn of blogdir_filenames) {
    if (fn.match(/\.(html|mjs)$/)) {
      continue;
    }
    blog_posts.push(fn);
  }

  const initialState = {
    pageSubtitle: 'Blog',
    posts: blog_posts,
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
