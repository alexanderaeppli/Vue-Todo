let mix = require('laravel-mix');

mix.js('assets/js/app.js', '/').setPublicPath('/');
mix.sass('assets/scss/app.scss', '/');