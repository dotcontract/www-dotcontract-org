function List(items, classes = []) {
  return `
<ul role="list" class="${["list-none", ...classes].join(" ")}">
  ${items
    .map((item) => {
      return `
<li class="">
  ${item.type === "doc" || item.type === "link" ? Link(item) : ""}
  ${item.type === "category" ? Category(item) : ""}
  ${item.items?.length > 0 && item.type !== "category" ? List(item.items) : ""}
</li>
        `.trim();
    })
    .join("\n")}
</ul>
    `.trim();
}

function Link(item) {
  return `
<a href="${item.path}" class="block${item.active ? " active" : ""}">
  <div class="${item.type}-label">${item.label}</div>
  ${Description(item, ["mt-4"])}
</a>
    `.trim();
}

function Category(item) {
  return `
<div>
  <a href="${item.path}" class="category-label font-medium uppercase">${item.label}</a>
  ${Description(item)}
</div>
${item.items?.length > 0 ? List(item.items) : ""}
    `.trim();
}

function Description(item, classes = []) {
  return item.description
    ? `
<div class="${["description text-1", ...classes].join(" ")}">
  ${item.description}
</div>
      `.trim()
    : "";
}

export default function DocsNav({ html, state }) {
  const { store } = state;
  const { sidebarData } = store;

  const tabs = sidebarData.filter((i) => i.type === "tab");
  const activeTab = tabs.find((tab) => tab.activeTab);

  return html`
    <style>
      nav > ul > li {
        margin-bottom: 2rem;
      }
      nav > ul {
        margin-left: 10px;
      }
      nav > ul li {
        margin-left: 10px;
        line-height: 1.3em;
      }
      li a {
        color: var(--rift-princess);
        padding-left: 6px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      li a:hover {
        margin-left: -3px;
        border-left: 3px solid #00ca88;
        background-color: var(--cloud-ateneo);
      }
      li a.active {
        margin-left: -3px;
        border-left: 3px solid #00ca88;
        background-color: var(--cloud-ateneo);
      }
      .category-label {
        color: var(--purple-white);
      }
      .description {
        color: var(--inky-lily);
      }
    </style>

    <nav>${List(activeTab?.items || sidebarData)}</nav>
  `;
}
