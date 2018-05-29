//const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = (config, env) => {
    config = rewireLess(config, env);
    return config;
};