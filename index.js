const Workflow = require("@saltcorn/data/models/workflow");
const Form = require("@saltcorn/data/models/form");
const icons = require("./tabler-icons.json");

module.exports = {
  sc_plugin_api_version: 1,
  plugin_name: "tabler-icons",
  headers: [
    {
      css: "/plugins/public/tabler-icons/tabler-icons-200-filled.min.css",
    },
    {
      css: "/plugins/public/tabler-icons/tabler-icons-200-outline.min.css",
    },
    {
      css: "/plugins/public/tabler-icons/tabler-icons-200.min.css",
    },
    {
      css: "/plugins/public/tabler-icons/tabler-icons-300-filled.min.css",
    },
    {
      css: "/plugins/public/tabler-icons/tabler-icons-300-outline.min.css",
    },
    {
      css: "/plugins/public/tabler-icons/tabler-icons-300.min.css",
    },
    {
      css: "/plugins/public/tabler-icons/tabler-icons-filled.min.css",
    },
    {
      css: "/plugins/public/tabler-icons/tabler-icons-outline.min.css",
    },
    {
      css: "/plugins/public/tabler-icons/tabler-icons.min.css",
    },
  ],
  icons: icons.map((icon) => `ti ti-${icon}`),
  configuration_workflow: () =>
    new Workflow({
      steps: [
        {
          name: "Tabler Icon configuration",
          form: () =>
            new Form({
              fields: [
                {
                  name: "enabled_icons",
                  label: "Enabled Icons",
                  type: "String",
                  sublabel:
                    "Comma-separated list of icons to enable. If not provided, all icons will be enabled.",
                  required: false,
                  attributes: {
                    options: icons.join(", "),
                  },
                },
                {
                  name: "css_path",
                  label: "Custom CSS Path",
                  type: "String",
                  sublabel:
                    "Path to custom CSS file. If not provided, the default Tabler Icons CSS will be used.",
                  required: false,
                },
              ],
            }),
        },
      ],
    }),

  onLoad: async (config) => {
    if (config.enabled_icons) {
      module.exports.icons = config.enabled_icons
        .split(",")
        .map((icon) => `ti ti-${icon.trim()}`);
    }
    if (config.css_path) {
      headers.push({
        css: config.css_path,
      });
      module.exports.headers = headers;
    }
  },
};
