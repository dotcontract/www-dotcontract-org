const styles = `<style>
  :host {
    display: block;
    padding: 20px;
  }
  #public-bottom-footer {
    position: relative;
    width: 100vw;
  }
  #public-bottom-footer .content {
    max-width: 1190px;
    width: 90%;
    margin: 0 auto;
    min-height: 60vh;
    padding: 110px 0 70px 0;
  }
  #public-bottom-footer .public-bottom-footer-left {
    width: 590px;
    max-width: 90%;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1050px) {
    #public-bottom-footer .content {
      display: flex;
      align-items: center;
    }
    #public-bottom-footer .public-bottom-footer-left {
      flex-basis: 590px;
    }
    #public-bottom-footer .public-bottom-footer-right {
    }
  }
  #public-bottom-footer .public-bottom-footer-left .cta {
    font-family: "Hepta Slab", "Sanchez", "Open Sans", sans-serif;
    font-size: 32px;
    line-height: 1.2em;
    width: 490px;
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  #public-bottom-footer .public-bottom-footer-left .caption {
    width: 490px;
    max-width: 90%;
    margin: 0 auto;
    font-size: 15px;
    color: #686865;
    line-height: 1.3em;
    padding-bottom: 58px;
    -display: none;
  }
  #public-bottom-footer .public-bottom-footer-right {
    width: 590px;
    max-width: 90%;
    margin: 0 auto;
    line-height: 1.3em;
    font-size: 15px;
    color: #606475;
  }
  #public-bottom-footer .public-bottom-footer-right .community {
    width: 490px;
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 35px;
  }
  #public-bottom-footer .public-bottom-footer-right .email {
    width: 490px;
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 35px;
  }
  #public-bottom-footer a {
    color: #00ca88;
    font-weight: 500;
  }
</style>`;

export default function PublicTopNav({ html, state }) {
  return html`
    ${styles}
    <footer id="public-bottom-footer">
    </footer>
  `;
}
