module.exports = {
  // 本番時は、リポジトリ名をルーティングに使用する
  publicPath: process.env.NODE_ENV === 'production' ? '/febd-vue-sample/' : '/',
  outputDir: 'docs',
  assetsDir: './',
};
