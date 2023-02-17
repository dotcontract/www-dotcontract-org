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
      .nav-logo img {
        width: 161px;
      }
      header .right {
        display: none;
        font-size: 14px;
        line-height: 1.5em;
        font-weight: 500;
      }
      @media (min-width: 800px) {
        header .right {
          margin-left: 20px;
          display: flex;
          flex-grow: 1;
          max-width: 40vw;
          justify-content: space-between;
        }
      }
      header .right a {
        padding: 8px 20px;
        color: #222;
      }
      header .right a.get-started {
        color: white;
        font-weight: bold;
        background: #00ca88;
        border-radius: 20px;
      }
    </style>
    <header class="public-top-nav">
      <div class="left">
        <a class="nav-logo" href="/"><img src="/_public/dotcontract-logo-color.svg" alt="DotContract" /></a>
      </div>
      <div class="right">
        <a class="link" href="/"><!--Products--></a>
        <a class="link" href="/"><!--Documentation--></a>
        <a class="link get-started" href="https://github.com/dotcontract">View GitHub</a>
      </div>
    </header>
  `;
}
