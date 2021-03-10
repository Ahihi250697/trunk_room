const { html } = require(`htm/preact`);
const LayoutDefault = require(`./layoutDefault`);
const body = require('./body');


module.exports = () => html`
  <${LayoutDefault}>
    <div class="banner">
      <figure class="banner-img">
        <img
          src="./images/top/img_banner_group.jpg"
          class="img-default"
          alt="バナー"
        />
      </figure>
    </div>
    <${body}>
    <//>
  <//>
`;
