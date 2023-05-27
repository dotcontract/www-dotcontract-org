import arc from "@architect/functions";

export default function Component({ html, state }) {
  const { store } = state;
  const { post = {} } = store;

  const CSS = /*css*/ `
  h1 {
    font-family: "Hepta Slab", "Sanchez", "Open Sans", sans-serif;
    font-size: 18px;
    line-height: 1.4em;
    font-weight: 500;
    padding-bottom: 20px;
    text-align: left;
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 24px;
    }
  }
  @media (min-width: 760px) {
    h1 {
      font-size: 36px;
    }
  }
  @media (min-width: 960px) {
    h1 {
      font-size: 50px;
    }
  }
  h2, h3 {
    font-weight: 700;
  }
  .blog-body {
    width: 860px;
    max-width: calc(100% - 40px);
    margin: 20px auto;
  }
  .blog-body p {
    margin: 2em 0;
    font-size: 16px;
    line-height: 1.6em;
  }
  .blog-body a {
    text-decoration: underline;
  }
  .blog-hero {
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
  }
  .blog-hero > div {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .blog-hero > .text {
    padding-bottom: 20px;
  }
  .blog-hero img {
    width: 100%;
  }
  @media (min-width: 800px) {
    .blog-hero {
      display: flex;
      flex-direction: columns;
    }
    .blog-hero > div {
      flex-basis: 50%;
    }
    .blog-hero > .text {
      padding-bottom: 0;
      padding-right: 40px;
    }
  }

  .blog-hero h1 {
    font-weight: 700;
  }
  .blog-hero .subtitle {
    line-height: 1.6em;
  }
  .blog-preroll {
    margin-top: 50px;
    padding-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
    border-top: 1px solid #111;
    font-size: 16px;
  }
  `;

  return html` <style>
      .blog-hero {
        color: ${post.frontmatter.hero_text_color || "inherit"};
        background: ${post.frontmatter.hero_background_color || "inherit"};
      }
      ${CSS}
    </style>

    <main class="blog-post">
      <div class="blog-hero">
        <div class="text">
          <h1>${post.title}</h1>
          ${post.frontmatter?.subtitle &&
          `<div class="subtitle">${post.frontmatter?.subtitle}</div>`}
        </div>
        ${post.frontmatter?.hero_image &&
        `<div class="hero-image"><img src="${arc.static(
          post.frontmatter?.hero_image
        )}" /></div>`}
      </div>
      <div class="blog-preroll">
        ${post.frontmatter?.date &&
        `<div class="date">${new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
        }).format(post.frontmatter.date)}</div>`}
      </div>
      <div class="blog-body">${post.html}</div>
    </main>`;
}
