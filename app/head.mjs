import arc from "@architect/functions";
import { getLinkTag, getStyleTag } from "@enhance/arc-plugin-styles/get-styles";

export default function Head(state) {
  const styles = process.env.ARC_LOCAL ? getLinkTag() : getStyleTag();
  const { store, status, req, error } = state;
  const { path } = req;
  const title = store?.pageSubtitle
    ? `${store?.pageSubtitle} | DotContract`
    : store?.pageTitle
    ? `${store?.pageTitle}`
    : `DotContract`;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="stylesheet" href="${arc.static("/css/common.css")}">
      ${styles}
      <link rel="icon" href="${arc.static("/favicon.svg")}">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@400;500&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@400;500&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
      mermaid.initialize({
        securityLevel: 'loose',
        theme: 'base',
        themeVariables: {
          background: "#fff",
          fontFamily: "Roboto Mono, Open Sans, Arial, Verdana",
          fontSize: "10px",
          primaryColor: "#fff",
          primaryBorderColor: "#000",
        },
        flowchart: {
          useMaxWidth: false
        }
      });
      </script>
    </head>
  `;
}
