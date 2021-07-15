const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@containers': 'src/containers',
    '@store': 'src/store',
    '@utils': 'src/utils',
    '@routes': 'src/routes',
  })(config);

  return config;
};
