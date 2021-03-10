
exports.render =  function(data) {
    return `<!DOCTYPE html>
    <html lang='ja'>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="format-detection" content="telephone=no, address=no, email=no">
            <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0'>
            <meta property="og:type" content="website">
            <meta property="og:url" content="">
            <meta property="og:image" content="">
            <meta property="og:site_name" content="">
            <meta property="og:title" content="">
            <meta property="og:description" content="">
            <meta name="keywords" content="">
            <meta name="description" content="">
            <link href="${data.slug}assets/css/reset.css" rel="stylesheet">
            <link href="${data.slug}assets/css/bootstrap_custom.css" rel="stylesheet">
            <link rel="stylesheet" href="${data.slug}css/common.css">
            ${data.css.map( css => '<link rel="stylesheet" href="' + data.slug + css + '">').join("\n")}
            <title>${data.title}</title>
        </head>
        <body>
            ${data.content}
            <script src="${data.slug}assets/js/jquery-3.5.1.min.js"></script>
            <script src="${data.slug}js/common.js"></script>
        </body>
    </html>`;
};