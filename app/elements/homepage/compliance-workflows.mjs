import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Compliance Workflows</h2>
        <ul>
          <li>Define custom compliance workflows</li>
          <li>Specify steps, actions, and requirements that must be met for a process to be completed</li>
          <li>Maintain compliant records for a single deal or account in one place</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/compliance-workflows.png')}" />
      </div>
    </section>`;
}
