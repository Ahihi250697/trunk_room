const { html } = require(`htm/preact`);

const LayoutDefault = require(`./LayoutDefault`);


module.exports = ({ page }) => html`
  <${LayoutDefault}>
    <div class="App">
      ${page}
    </div>
  <//>
`;
