const { html } = require(`htm/preact`);
const LayoutDefault = require(`./layoutDefault`);
const body = require('./body');


module.exports = () => html`
  <${LayoutDefault}>
    <div class="banner">
      <figure class="banner-img">
        <picture>
          <source media="(max-width: 767px)" srcset="./images/top/img_banner_sp.jpg" />
        <img
          src="./images/top/img_banner_group.jpg"
          alt="バナー"
        />
        </picture>
        
      </figure>
    </div>
    <${body}>
    <//>
  <//>
`;
