module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  app: {
    keys: [env('APP_KEYS')],
  },
  url: env('URL', 'http://localhost:1337'),
  proxy: true,
});