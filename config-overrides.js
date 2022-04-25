const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@hooks": "src/hooks",
    "@config": "src/config",
    "@hocs": "src/HOC",
    "@layout": "src/layout",
    "@contexts": "src/contexts",
  })(config);
  return config;
};
