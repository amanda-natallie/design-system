/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const url = require('@rollup/plugin-url');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      url({ include: ['**/*.ttf', '**/*.woff', '**/*.woff2'] }),
      ...config.plugins,
    ];

    return config;
  },
};
