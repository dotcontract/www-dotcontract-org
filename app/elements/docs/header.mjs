export default function PublicTopNav({ html, state }) {
  return html`
    <style>
      :host {
        display: block;
        padding: 10px 20px;
      }
      header {
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        color: #071d2a;
        padding: 0;
        margin: 0;
        display: flex;
        width: calc(100%);
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: rgba(227,232,237,1.00);
        margin-bottom: 0;
      }
      header a {
        color: #000;
        text-decoration: none;
      }
      header .left {
        display: flex;
        align-items: center;
        margin-right: 20px;
        font-size: 30px;
        font-weight: bold;
      }
      header .left span {
        font-size: 20px;
        margin: 5px 10px;
      }
      header .left a {
        font-size: 22px;
        text-decoration: underline;
        color: #222;
      }
      .nav-logo img {
        width: 161px;
      }
      header .right {
        display: none;
        font-size: 16px;
        line-height: 1.5em;
        font-weight: 500;
      }
      @media (min-width: 800px) {
        header .right {
          margin-left: 20px;
          display: flex;
          flex-grow: 1;
          min-width: 500px;
          max-width: 30vw;
          justify-content: space-between;
        }
      }
      header .right a {
        padding: 8px 20px;
        color: #222;
        font-weight: bold;
      }
      header .right a.get-started {
        display: flex;
        justify-content: center;
        font-weight: bold;
        border: 2px solid #00ca88;
        border-radius: 20px;
      }
      header .right a.get-started img {
        padding-right: 0.5em;
        width: 24px;
      }
      .invisible {
        visibility: none;
      }
    </style>
    <header class="public-top-nav">
      <div class="left">
        <a class="nav-logo" href="/"><img src="/_public/dotcontract-logo-color.svg" alt="DotContract" /></a>
        <span>&gt;</span>
        <a href="/docs">Docs</a>
      </div>
      <div class="right">
        <a class="link invisible" href="/solutions">Solutions</a>
        <a class="link invisible" href="/resources">Resources</a>
        <a class="link get-started" href="http://dotcontract.cloud"><img style="display: inline-block;" src="/_public/icons/cloud.svg" /> Cloud Login</a>
      </div>
    </header>
  `;
}
