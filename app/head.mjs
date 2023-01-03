import { getLinkTag, getStyleTag } from "@enhance/arc-plugin-styles/get-styles";

export default function Head(state) {
  const styles = process.env.ARC_LOCAL ? getLinkTag() : getStyleTag();

  const { store, status, req, error } = state;
  const { path } = req;
  const title = store?.pageTitle
    ? `DotContract — ${store?.pageTitle}`
    : `DotContract`;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      ${styles}
      <link rel="icon" href="/_public/favicon.svg">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
    </head>
  `;
}
