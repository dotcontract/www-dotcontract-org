import arc from "@architect/functions";

export default function Component({ html, state }) {
  const { store } = state;
  const { post = {} } = store;

  const CSS = /*css*/ `
  .blog-post {
    width: 1200px;
    max-width: calc(100vw - 40px);
    margin: 40px auto;
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
  `;

  return html` <style>
      ${CSS}
    </style>

    <main class="blog-post">${post.html}</main>`;
}
