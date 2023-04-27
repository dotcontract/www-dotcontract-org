import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Entity Management</h2>
        <ul>
          <li>Record legal entities as early as formation, providing a secure and reliable platform for managing legal and financial aspects</li>
          <li>In Tennessee and Wyoming, a DotContract can serve as a legal cornerstone for the entity</li>
          <li>Transparent and trusted record of all legal and financial transactions related to the entity, ensuring compliance with applicable laws and regulations</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/entity-mgmt.png')}" />
      </div>
    </section>`;
}
