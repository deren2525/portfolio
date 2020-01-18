import { Configuration } from "@nuxt/types";

// Load .env
import DotEnv from "dotenv";
DotEnv.config();

// Validate this.$environments
import { validate } from "./plugins/environments";
validate();

const nuxtConfig: Configuration = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#"
    },
    title: "DEREN's Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "DERENのPortfolio🐶"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://derennoportfolio.web.app/"
      },
      { hid: "og:title", property: "og:title", content: "DEREN's Portfolio" },
      {
        hid: "og:description",
        property: "og:description",
        content: "DERENのPortfolio🐶"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/favicon.ico"
      },
      { property: "article:publisher", content: "FacebookURL" },
      { property: "fb:app_id", content: "FacebookAppID" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Twitter" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["normalize.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/environments.ts"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Typescript support
    "@nuxt/typescript-build",
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/dotenv", "@nuxtjs/axios"],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Typescript options
   */
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  }
};

module.exports = nuxtConfig;
