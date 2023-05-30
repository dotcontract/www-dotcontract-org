export default function DocsPage({ html, state }) {
  const { store } = state;
  const { doc = {} } = store;

  return html`
    <style scope="global">
      /* Colors */
      body {
        background-color: var(--white-denim);
        color: var(--rift-white);
        font-family: "Inter";
        -webkit-font-smoothing: antialiased;
      }
      article a {
        text-decoration: underline;
      }
      article p {
        -text-align: justify;
      }

      /* Scrollbars */
      body {
        scrollbar-color: var(--grey-greyer) transparent;
      }
      ::-webkit-scrollbar {
        height: 8px;
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background-color: transparent;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: var(--grey-greyer);
      }
    </style>

    <style>
      /* Layout */

      /* single col */
      :host {
        display: grid;
        grid-template-rows: minmax(auto, 60px) auto;
        grid-template-areas:
          "header"
          "content"
          "sidebar";
        gap: 0 0;
        height: 100vh;
      }
      #header {
        grid-area: header;
        background: white;
      }
      #header header {
        background: white;
      }
      #sidebar {
        grid-area: sidebar;
        position: relative;
      }
      #content {
        grid-area: content;
        position: relative;
        width: 100vw;
        height: auto;
      }
      #outline {
        grid-area: outline;
        display: none;
      }

      @media only screen and (min-width: 48em) {
        /* 2-col + */
        :host {
          position: fixed;
          overflow: auto;
          height: 100vh;

          grid-template-columns: 16rem 1fr;
          grid-template-rows: minmax(auto, 75px) auto;
          grid-template-areas:
            "header header"
            "sidebar content"
            "sidebar content";
        }

        #sidebar {
          display: block;
        }

        #header,
        #sidebar,
        #outline {
          position: sticky;
          font-family: "Inter";
          color: #7d7d7d;
          -webkit-font-smoothing: antialiased;
        }

        #content {
          width: auto;
        }

        #sidebar,
        #outline {
          top: 1rem;
        }
      }

      @media (min-width: 72em) {
        /* 3-col */
        :host {
          position: fixed;
          overflow: auto;
          height: 100vh;
          width: 100vw;

          grid-template-columns: 16rem 4fr 16rem;
          grid-template-areas:
            "header  header   header"
            "sidebar content outline"
            "sidebar content outline";
        }
        #outline {
          display: block;
        }
      }
      .doc-prev-and-next {
        margin-top: 40px;
        display: flex;
        flex-direction: columns;
        justify-content: space-between;
        font-weight: bold;
      }
    </style>
    <style>
      code[data-language="flags"] {
        font-weight: bold;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
      }
      code[data-language="wrapped"] {
        white-space: pre-wrap;
      }
      code[data-language="shell"] {
        white-space: pre-wrap;
      }
      note {
        display: block;
        margin-bottom: 1.5rem;
        padding: 5px;
        background: #fff9d8;
        border: none;
        padding: 1.25em;
        margin-left: 0;
        margin-top: 0.25em;
        font-size: 14px;
      }
    </style>

    <docs-symbols></docs-symbols>

    <docs-header id="header" class=""></docs-header>

    <nav id="sidebar" class="overflow-y-auto-lg" aria-label="sidebar">
      <docs-nav></docs-nav>
    </nav>

    <doc-content id="content" class="overflow-y-auto-lg pb2">
      <article slot="doc" class="block leading2">
        ${doc.title ? `<h1>${doc.title}</h1>` : ""} ${doc.html}
        ${(doc.frontmatter?.next_doc || doc.frontmatter?.prev_doc) && `
          <div class="doc-prev-and-next">
            ${doc.frontmatter?.prev_doc ? `<a href="/docs/${doc.frontmatter?.prev_doc}" class="prev">← Prev</a>` : '<span></span>'}
            ${doc.frontmatter?.next_doc ? `<a href="/docs/${doc.frontmatter?.next_doc}" class="next">Next →</a>` : '<span></span>'}
          </div>
        `}
      </article>
    </doc-content>

    <docs-outline id="outline" class=" overflow-y-auto-lg">
      ${doc.tocHtml?.indexOf("<li>") > 0
        ? /* html */ `
      <div slot="toc">
        <h3 class="mb-2 font-semibold">On this page</h3>
        ${doc.tocHtml}
      </div>`
        : ""}
    </docs-outline>

    <google-analytics code="${state.store.gacode}"></google-analytics>

    <script type="module">
      class Layout extends HTMLElement {
        constructor() {
          super();
          let sidebar = this.querySelector("#sidebar");

          let top = sessionStorage.getItem("docs-sidebar-scroll");
          if (top !== null) {
            sidebar.scrollTop = parseInt(top, 10);
          }

          window.addEventListener("beforeunload", () => {
            sessionStorage.setItem("docs-sidebar-scroll", sidebar.scrollTop);
          });
        }
      }
      customElements.define("docs-layout", Layout);
    </script>
  `;
}
