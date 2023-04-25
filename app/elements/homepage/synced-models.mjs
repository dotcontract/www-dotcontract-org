import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Synced Models</h2>
        <ul>
          <li>Sync models to data within a DotContract repository</li>
          <li>Automatically update and synchronize data between systems</li>
          <li>Eliminate manual data entry and reduce human errors</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/synced-models.png')}" />
      </div>
    </section>`;
}
