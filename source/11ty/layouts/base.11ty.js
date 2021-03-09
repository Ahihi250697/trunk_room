const { html } = require("htm/preact");
const render = require('preact-render-to-string');

console.log(exports.render)
exports.render = function (data) {
  return render.render(html`
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=10.0, user-scalable=yes"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link href="${data.path}assets/css/reset.css" rel="stylesheet" />
        <link href="${data.path}assets/css/bootstrap_custom.css" rel="stylesheet">
        <link href="${data.path}css/common.css" rel="stylesheet" />
        ${data.css.map( css => '<link rel="stylesheet" href="' + data.path + css + '">').join("\n")}
        <title>${data.title}</title>
      </head>
      <body>
            ${data.content}
            <script src="${data.path}assets/js/jquery-3.5.1.min.js"></script>
            <script src="${data.path}js/common.js"></script>
        </body>
    </html>
  `);

};
