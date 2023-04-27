import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Evolving Governance</h2>
        <ul>
          <li>Define evolving governance of a project or entity by defining rules and workflows that reflect the entity's evolving needs</li>
          <li>Revisions to rules are checked to satisfy existing rules, enabling preservation of rights and obligations (safe revision)</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/evolving-governance.png')}" />
      </div>
    </section>`;
}
