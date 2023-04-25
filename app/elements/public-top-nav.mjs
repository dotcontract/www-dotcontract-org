export default function PublicTopNav({ html, state }) {
  return html`
    <style>
      :host {
        display: block;
        padding: 10px 20px;
      }
      header {
        display: flex;
        width: calc(100%);
        justify-content: space-between;
        align-items: center;
        flex-flow: wrap;
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
        font-size: 16px;
        line-height: 1.5em;
        font-weight: 500;
      }
      header .right a,
      header .below a {
        padding: 8px 20px;
        color: #222;
        font-weight: bold;
      }
      header .right a.get-started,
      header .below a.get-started {
        display: flex;
        justify-content: center;
        font-weight: bold;
        border: 2px solid #00ca88;
        border-radius: 20px;
      }
      header .right a.get-started img,
      header .below a.get-started img {
        padding-right: 0.5em;
        width: 24px;
      }
      header .right a.menu-icon {
        height: 25px;
      }
      header .right a.menu-icon img {
        height: 25px;
      }
      header .right .link,
      header .right .link.get-started {
        display: none;
      }

      header .below {
        display: none;
        width: 100vw;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding-bottom: 20px;
      }
      header .below a {
        padding: 20px;
        margin: 20px auto;
      }
      header .below.visible {
        display: flex;
      }
      @media (min-width: 800px) {
        header .below.visible {
          display: none;
        }
        header .right a.menu-icon {
          display: none;
        }
        header .right .link, header .right .link.get-started {
          display: block;
        }
        header .right {
          margin-left: 20px;
          display: flex;
          flex-grow: 1;
          min-width: 500px;
          max-width: 30vw;
          justify-content: space-between;
        }
      }
    </style>
    <header class="public-top-nav">
      <div class="left">
        <a class="nav-logo" href="/"
          ><img src="/_public/dotcontract-logo-color.svg" alt="DotContract"
        /></a>
      </div>
      <div class="right">
        <a class="menu-icon"><img src="/_public/icons/menu.svg" /></a>
        <a class="link" href="/resources">Resources</a>
        <a class="link" href="/for-devs">Developers</a>
        <a class="link get-started" href="http://dotcontract.cloud"
          ><img style="display: inline-block;" src="/_public/icons/cloud.svg" />
          Cloud Login</a
        >
      </div>
      <div class="below">
        <a class="link" href="/resources">Resources</a>
        <a class="link" href="/for-devs">Developers</a>
        <a class="link get-started" href="http://dotcontract.cloud"
          ><img style="display: inline-block;" src="/_public/icons/cloud.svg" />
          Cloud Login</a
        >
      </div>
    </header>
    <script defer>
      const menu = document.querySelector("header .menu-icon");
      const header_below = document.querySelector("header .below");
      menu.onclick = (e) => {
        header_below.classList.toggle("visible");
      };
    </script>
  `;
}
