### important!

remove local `eventjuicer-site-components/node_modules/react` when using `next-transpile-modules`

next.config.js

```javascript

const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components']);

module.exports = withTM({
    webpack: (config) => {
      config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
      return config 
    },
});

```