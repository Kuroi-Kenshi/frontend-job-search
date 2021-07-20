const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@containers': 'src/containers',
    '@constants': 'src/constants',
    '@store': 'src/store',
    '@utils': 'src/utils',
    '@hooks': 'src/hooks',
    '@routes': 'src/routes',
  })(config);

  return config;
};
