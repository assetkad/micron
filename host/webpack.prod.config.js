const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,

  remotes: [
    ['todo', 'https://heroic-medovik-a142f3.netlify.app'],
    ['login', 'https://stately-gecko-3024da.netlify.app/'],
  ],
});
