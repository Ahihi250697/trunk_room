
const { html } = require(`htm/preact`);
const { render} = require(`preact-render-to-string`);
const path = require('./data/common.11ty');

const App = require(`./components/topPage`);

module.exports = class top {
  data() {
    return {
      title: `TOP | トランクルーム真田丸`,
      layout: `base.11ty.js`,
      css: ['css/top.css'],
      slug: path.top.slug
      // pagination: {
      //   data: `global`,
      //   size: 1,
      //   alias: `page`,
      //   addAllPagesToCollections: true,
      // },
      }
  }

  render(data) {
    return render(html`<${App} path = ${data.title}/>`);
  }
};
