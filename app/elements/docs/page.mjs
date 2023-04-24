export default function DocsPage({ html, state }) {
  const { store } = state;
  const { doc = {} } = store;

  return html`
    <style scope="global">
      /* Colors */
      body {
        background-color: var(--white-denim);
        color: var(--rift-white);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          Arial, sans-serif;
      }
      article a {
        text-decoration: underline;
      }
      article p {
        text-align: justify;
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
    </style>

    <docs-symbols></docs-symbols>

    <docs-header id="header" class=""></docs-header>

    <nav id="sidebar" class="overflow-y-auto-lg" aria-label="sidebar">
      <docs-nav></docs-nav>
    </nav>

    <doc-content id="content" class="overflow-y-auto-lg pb2">
      <article slot="doc" class="block leading2">
        ${doc.title ? `<h1>${doc.title}</h1>` : ""} ${doc.html}
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
