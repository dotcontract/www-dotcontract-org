import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Accounting Standards</h2>
        <ul>
          <li>Define custom charts of accounts, ensure financial data is properly categorized and reported</li>
          <li>Robust APIs and integration capabilities allow users to seamlessly connect accounting data enabling real-time reporting and financial data analysis</li>
          <li>Invite collaborators to all or some of your accounting records</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/accounting.png')}" />
      </div>
    </section>`;
}
