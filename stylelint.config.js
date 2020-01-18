module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["include", "mixin", "each"] }
    ],
    "at-rule-empty-line-before": null,
    "rule-empty-line-before": null,
    "declaration-empty-line-before": null
  }
};
