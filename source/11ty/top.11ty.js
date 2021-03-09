/* eslint-disable class-methods-use-this */
const { html } = require(`htm/preact`);
const { render} = require(`preact-render-to-string`);

const App = require(`./components/app`);

module.exports = class Page {
  data() {
    return {
      title: `Setting up Eleventy with Preact and htm`,
      layout: `base.njk`,
      pagination: {
        data: `global`,
        size: 1,
        alias: `page`,
        addAllPagesToCollections: true,
      },
      names: (page)=> `${page.name}`
    };
  }

  render(data) {
      console.log(data);
    return render(html`<${App}/>`);
  }
};
