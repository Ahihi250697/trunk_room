const { html } = require("htm/preact");
const Header = require("./header");
const Footer = require("./footer");

module.exports = ({ children }) => html`
  <div id="wraper">
    <main class="main">
      <${Header}> <//>
      ${children}
    </main>
    <footer class="footer">
      <${Footer}> <//>
    </footer>
    <div id="topPage">
      <button class="btn-default btn-hover">
        <img src="./images/common/icon_arrow_top.svg" alt="turn top page" class="img-default"/>
      </button>
    </div>
    <div class="btn-entySp entry">
      <div class="entry-phone">
        <a href="#" class="a-default a-hover a-entry">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="47" viewBox="0 0 47 47">
        <use href="#icon-phone" />
        </svg>
          <span>お電話</span>
        </a>
      </div>
      <div class="entry-email">
        <a href="#" class="a-default a-hover a-entry">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="31.489" viewBox="0 0 44.422 31.489">
          <use href="#icon-email" />
        </svg>
          <span>見学・申込み</span>
        </a>
      </div>
    </div>
  </div>
`;
