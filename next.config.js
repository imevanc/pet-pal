/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // config
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mapbox_token:
      "pk.eyJ1IjoiaW1ldmFuYyIsImEiOiJjbDE1MzhtY28wZ2xwM2VrYWFrazZsb2g1In0.Cz5Ii8UaMYlB-So-l4DcVw",
  },
});
