export default function HomepageHero({ html, state }) {
  const CSS = /*css*/`
    #hero {
      margin-top: 50px;
    }
    #hero .image {
      margin: 0 auto;
      width: 1000px;
      max-width: calc(100vw - 40px);
    }
    #hero .things {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      font-size: 15px;
      color: #444;
      font-weight: 600;
      text-align: center;
    }
    #hero .things img {
      display: inline-block;
    }
    #hero .things .thing div {
      padding: 10px 20px;
      line-height: 1.4em;
    }
    #hero .things {
      font-size: 12px;
    }
    #hero .things img {
      width: 55px;
    }
    #hero .things .thing div {
      padding: 5px 10px;
    }
    @media (min-width: 500px) {
      #hero .things {
        font-size: 15px;
      }
      #hero .things img {
        width: 75px;
      }
      #hero .things .thing div {
        padding: 10px 20px;
      }
    }
  `;

  return html` <style>
      ${CSS}
    </style>
    <section id="hero">
      <h1>
        <div>A robust digital contract platform.</div>
        <div>A powerful contract standard.</div>
      </h1>
      <div class="image">
        <img src="/_public/solutions/dotcontract-repo.png" />
      </div>
      <div class="things">
        <div class="thing">
          <img src="/_public/solutions/cryptographic.png" />
          <div>Advanced cryptographic security</div>
        </div>
        <div class="thing">
          <img src="/_public/solutions/permissioned.png" />
          <div>Permissioned access control</div>
        </div>
        <div class="thing">
          <img src="/_public/solutions/recordkeeping.png" />
          <div>Secure and reliable recordkeeping</div>
        </div>
      </div>
    </section>`;
}
