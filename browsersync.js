/**
 * Require Browsersync
 */
const browserSync = require('browser-sync');

/**
 * Run Browsersync with server config
 */
browserSync.init({
  port: 8080,
  files         : [
    'dist/*.css',
    'dist/*js',
    '{lib,templates}/**/*.php',
    '*.php',
  ],
  snippetOptions: {
    whitelist: ['/wp-admin/admin-ajax.php'],
    blacklist: ['/wp-admin/**'],
  },
});