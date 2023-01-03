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
      header a {
        color: #000;
        text-decoration: none;
      }
      header .left {
        display: block;
        margin-right: 20px;
        font-size: 30px;
        font-weight: bold;
      }
      header .right {
        margin-left: 20px;
        display: flex;
        flex-grow: 1;
        max-width: 40vw;
        justify-content: space-between;
      }
      header .right a {
        padding: 8px;
      }
      .get-started {
        border: 1px solid black;
        background: greenyellow;
        border-radius: 2px;
      }
    </style>
    <header class="public-top-nav">
      <div class="left">
        <a class="nav-logo" href="/">DotContract</a>
      </div>
      <div class="right">
        <a class="link" href="/">Products</a>
        <a class="link" href="/">Documentation</a>
        <a class="link get-started" href="/">Get Started</a>
      </div>
    </header>
  `;
}
