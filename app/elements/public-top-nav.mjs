export default function PublicTopNav({ html, state }) {
  return html`
    <style>
      :host {
        display: block;
        padding: 20px;
      }
      header {
        display: flex;
        width: calc(100%);
        justify-content: space-between;
      }
      header .left {
        display: block;
        margin-right: 20px;
      }
      header .right {
        margin-left: 20px;
        display: flex;
        flex-grow: 1;
        max-width: 30vw;
        justify-content: space-between;
      }
    </style>
    <header class="public-top-nav">
      <div class="left">
        <a class="nav-logo" href="/">DotContract</a>
      </div>
      <div class="right">
        <a class="link" href="/">Tools</a>
        <a class="link" href="/">Resources</a>
        <a class="link" href="/">About</a>
      </div>
    </header>
  `;
}
