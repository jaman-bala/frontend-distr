import { Config } from "stylelint";

const config: Config = {
  extends: ["stylelint-config-recommended", "stylelint-config-tailwindcss"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};

export default config;
