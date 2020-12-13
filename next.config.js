const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components']);

module.exports = withTM({
    webpack: (config) => {

      config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules', 'react');
      config.resolve.alias['react-dom'] = path.resolve(__dirname,'node_modules', 'react-dom');

      return config 
    },
    i18n: {
      locales: ['pl'],
      defaultLocale: 'pl',
    },
});