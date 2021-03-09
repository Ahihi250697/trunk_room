
// let links = require('./global/variables.11ty')
const { html } = require('htm/preact');
const render = require('preact-render-to-string');
console.log(render);

// exports.data = {
//     title: 'top',
//     path: path.top[0],
//     css: ['css/top.css'],
//     layout: "../layouts/base.11ty.js",
//   };
// console.log(links);

module.exports = class page {
    data() {
        return {
            title: 'Top',
            layout: '../layouts/base.11ty.js',
            path: './',
            css: ['css/top.css']
        }
    }
    render(data) {
        return render.render(html`
            <header></header>
        `)
    }
}



//   exports.render = function(data) {
//     return `
//         ${header(data.path)}
//         ${primary(data)}
//         ${footer(data.path)}
//     `;
//   };

