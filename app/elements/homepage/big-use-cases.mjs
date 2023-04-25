export default function Blank({ html, state }) {
  const CSS = /*css*/ `

  #big-use-cases {
    padding-top: 60px;
    padding-bottom: 80px;
    background: #202333;
    color: white;
    position: relative;
    text-align: center;
  }
  #big-use-cases h2 {
    display: inline-block;
    text-align: center;
    width: 90%;
    padding: 10px 0 35px 0;
    line-height: 1.4em;
  }
  #big-use-cases .use-cases {
    max-width: 1190px;
    margin: 0 auto;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    color: #071d2a;
  }
  #big-use-cases .use-case {
    margin: 20px 40px;
    min-width: 360px;
    line-height: 1.4em;
  }
  #big-use-cases .use-case .box {
    height: 100%;
    max-width: calc(100vw - 80px);
    box-sizing: border-box;
    border: 1px solid #ededed;
    border-radius: 40px;
    padding: 30px 45px 60px 45px;
    background: white;
  }
  #big-use-cases .use-case .industry {
    text-align: center;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    color: #00ca88;
    letter-spacing: 1.5px;
    line-height: 4em;
  }
  #big-use-cases .use-case .image {
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto;
  }
  #big-use-cases .use-case .heading {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    padding: 15px 0px;
    line-height: 1.3em;
    max-width: 80%;
    margin: 0 auto;
  }
  #big-use-cases .use-case .description {
    text-align: center;
    font-size: 14px;
    color: #686865;
    line-height: 1.3em;
    max-width: 96%;
    max-width: 400px;
    margin: 0 auto;
  }
  #big-use-cases a.get-started {
    background: #00ca88;
    border-radius: 18px;
    margin: 0 auto;
    display: inline-block;
    padding: 10px 25px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 30px;
  }

  @media (min-width: 960px) {
    #big-use-cases .use-case {
      margin: 40px;
    }
    #big-use-cases .use-cases {
      color: #071d2a;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
    }
    #big-use-cases .use-case {
      margin: 0;
      padding: 20px;
    }
  }
  @media (min-width: 1000px) {
    #big-use-cases .use-case {
      margin: 0;
      width: 33%;
    }
  }
  `;

  return html` <style>
      ${CSS}
    </style>
    <div id="big-use-cases">
      <background-curve right below fill="#fff"></background-curve>
      <background-curve left above fill="#202334"></background-curve>
      <h2>Powering use cases across industries</h2>
      <div class="use-cases">
        <div class="use-case">
          <div class="box">
            <div class="industry">Finance</div>
            <div class="image"><img src="/_public/homepage/finance.png" /></div>
            <div class="heading">
              Validated terms and conditions for finance
            </div>
            <div class="description">
              Model lifecycle conditions for any asset type, automatically
              enforce the rights and obligations between participants with a
              powerful digital contract framework.
            </div>
          </div>
        </div>
        <div class="use-case">
          <div class="box">
            <div class="industry">Governance</div>
            <div class="image">
              <img src="/_public/homepage/governance.png" />
            </div>
            <div class="heading">
              Digital governance for organizations of all sizes
            </div>
            <div class="description">
              Embed logic and dependencies with contract execution and signing
              to enable organizational checks and balances.
            </div>
          </div>
        </div>
        <div class="use-case">
          <div class="box">
            <div class="industry">Compliance</div>
            <div class="image">
              <img src="/_public/homepage/compliance.png" />
            </div>
            <div class="heading">Complex compliance automation</div>
            <div class="description">
              Model and automate complex compliance checks with a robust and
              reliable contract specification language.
            </div>
          </div>
        </div>
        <div class="use-case">
          <div class="box">
            <div class="industry">Data</div>
            <div class="image"><img src="/_public/homepage/data.png" /></div>
            <div class="heading">Break data silos across parties</div>
            <div class="description">
              Use hosted contracts to enable direct access and data feeds to
              relevant participants.
            </div>
          </div>
        </div>
        <div class="use-case">
          <div class="box">
            <div class="industry">Digital Assets</div>
            <div class="image">
              <img src="/_public/homepage/digital-assets.png" />
            </div>
            <div class="heading">
              Extend digital contracts into custodial assets
            </div>
            <div class="description">
              Easy to follow, semantic code that's maintainable by record
              keepers and custodians. Portable files make it simple to share
              with analysts and investors.
            </div>
          </div>
        </div>
        <div class="use-case">
          <div class="box">
            <div class="industry">And More</div>
            <div class="image"><img src="/_public/homepage/code.png" /></div>
            <div class="heading">Unlock the power of digital contracts</div>
            <div class="description">
              A simple digital contract standard enables you to build and deploy
              digital contracts easily for enterprise or consumer use.
            </div>
          </div>
        </div>
      </div>
      <a
        class="get-started"
        href="mailto:hello@dotcontract.xyz"
        _href="/contact"
        >Contact us ›</a
      >
    </div>`;
}
