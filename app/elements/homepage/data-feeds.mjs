import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Data Feeds</h2>
        <ul>
          <li>Create custom data feeds of real-time info about the state of contractual rights and obligations, accounts, and cash flows</li>
          <li>Automate collection and syncing of data across systems</li>
          <li>Advanced cryptographic security ensure data remains confidential and secure</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/data-feeds.png')}" />
      </div>
    </section>`;
}
