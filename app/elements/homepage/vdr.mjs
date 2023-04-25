import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Virtual Data Rooms</h2>
        <ul>
          <li>Create bespoke virtual data rooms</li>
          <li>Central, secure, reliable data repository</li>
          <li>Advanced cryptographic security</li>
          <li>Permissioned access control</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/vdr.png')}" />
      </div>
    </section>`;
}
