let mix = require('laravel-mix');

mix
    .js('src/js/app.js', 'js')
    .js('src/js/admin.js', 'js')
    .postCss("src/css/app.css", "css", [
        require("tailwindcss"),
    ])
    .setPublicPath('public');