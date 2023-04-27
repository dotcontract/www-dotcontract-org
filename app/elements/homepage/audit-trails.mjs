import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Trusted Audit Trails</h2>
        <ul>
          <li>Immutable audit trail</li>
          <li>Cryptographically signed and timestamped commits provide a tamper-proof record of all activity on a contract or repo</li>
          <li>Enables administrative agents, custodians, auditors, and their clients to stay in sync and ensure that all parties have access to the most up-to-date information</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/audit-trail.png')}" />
      </div>
    </section>`;
}
