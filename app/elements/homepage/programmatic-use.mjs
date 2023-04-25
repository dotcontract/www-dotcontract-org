import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Programmatic Use</h2>
        <ul>
          <li>Programmatically reference state data</li>
          <li>Query and model possible contract outcomes</li>
          <li>Automate contract workflows</li>
          <li>Robust error checking</li>
          <li>Define, manage, and execute with ease</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/programmatic-use.png')}" />
      </div>
    </section>`;
}
