// /* eslint-disable filenames/match-regex */
import { existsSync, readFileSync } from "fs";
import { URL } from "url";
import { Arcdown } from "arcdown";
import arcStaticImg from "markdown-it-arc-static-img";
import markdownItMermaid from "../../lib/markdown-it-mermaid.mjs";
import navDataLoader, {
  unslug,
  other as otherLinks,
} from "../../data/docs/common.mjs";
import HljsLineWrapper from "../../helpers/hljs-line-wrapper.mjs";

const arcdown = new Arcdown({
  pluginOverrides: {
    markdownItToc: {
      containerClass: "toc mb2 ml-2",
      listType: "ul",
    },
  },
  plugins: [markdownItMermaid, arcStaticImg],
  hljs: {
    languages: {
      mermaid: false,
    },
    sublanguages: { javascript: ["xml", "css"] },
    plugins: [new HljsLineWrapper({ className: "code-line" })],
  },
});

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(request) {
  const gacode = process.env.ARC_ENV === "production" ? "G-TODO" : "G-TODO";

  const { path: activePath } = request;
  let docPath = activePath.replace(/^\/?docs\/{0,1}/, "");
  let docURL = new URL(`../../pages/docs/${docPath}/index.md`, import.meta.url);
  if (!existsSync(docURL.pathname)) {
    if (existsSync(docURL.pathname)) {
      return {
        status: 302,
        location: `${activePath}/`,
      };
    }
  }

  const sidebarData = navDataLoader('docs', activePath)

  let docMarkdown;
  try {
    docMarkdown = readFileSync(docURL.pathname, "utf-8");
  } catch (_err) {
    let searchTerm = null;
    if (!docPath.endsWith("/index")) {
      const docPathParts = docPath.split("/");
      searchTerm = docPathParts.pop();
      searchTerm = unslug(searchTerm);
    }
    const initialState = {
      doc: {
        title: "404",
        path: docPath,
        html: `<docs-404 search-term="${searchTerm}"></docs-404>`,
      },
      otherLinks,
      sidebarData,
      searchTerm,
      gacode,
    };

    return { statusCode: 404, json: initialState };
  }
  const doc = await arcdown.render(docMarkdown);

  let gitHubLink =
    "https://github.com/dotcontract/www-dotcontract-org/edit/main/";
  gitHubLink += `app/pages/${activePath.replace(/^\//,'')}/index.md`;

  const initialState = {
    pageSubtitle: doc?.title,
    doc,
    gitHubLink,
    otherLinks,
    sidebarData,
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
