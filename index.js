const icons = require("./tabler-icons.json");

module.exports = {
  sc_plugin_api_version: 1,
  plugin_name: "tabler-icons",
  headers: [
    {
      css: `/plugins/public/tabler-icons@${
        require("./package.json").version
      }/tabler-icons.css`,
    },
  ],
  icons: icons.map((icon) => `ti ti-${icon}`),
};
