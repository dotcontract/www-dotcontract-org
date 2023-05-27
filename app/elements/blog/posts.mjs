import arc from "@architect/functions";

export default function Component({ html, state }) {
  const { store } = state;
  const { posts = [] } = store;

  const CSS = /*css*/ `
  main {
    width: calc(100vw - 40px);
    max-width: calc(100vw - 40px);
    margin: 40px auto;
  }
  .blog-posts {
  }
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

  .blog-posts {
    display: flex;
    flex-direction: columns;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .blog-post {
    max-width: 100%;
    width: 400px;
  }
  .blog-post .image {
    max-width: 100%;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  .blog-post .image img {
    width: 100%;
  }
  .blog-post .title {
    font-size: 15px;
    padding-top: 1em;
    font-size: 18px;
    font-weight: 500;
  }
  .blog-post .date {
    font-size: 18px;
    padding-top: 1em;
  }
  `;

  return html`<style>
      ${CSS}
    </style>
    <main>
      <h1>Blog</h1>
      <div class="blog-posts">
        ${posts
          .filter(p => !p.frontmatter?.hidden)
          .map(
            (post) => `
        <div class="blog-post">
           <a href="/blog/${post.slug}">
            <div class="image"><img src="${
              arc.static(post.frontmatter?.hero_image) ||
              arc.static("/blog/default.png")
            }" /></div>
            <div class="title">${post.title}</div>
            <div class="date">${new Intl.DateTimeFormat("en-US", {
              dateStyle: "long",
            }).format(post.frontmatter.date)}</div>
          </a>
        </div>
      `
          )
          .join("\n")}
      </div>
    </main>`;
}
