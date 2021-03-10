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
    <div class="btn-entySp">
      
    </div>
  </div>
`;
