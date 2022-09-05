const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const allowedImageWordPressDomain = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL
).hostname;

module.exports = withBundleAnalyzer({
  trailingSlash: false,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: [
      allowedImageWordPressDomain,
      "via.placeholder.com",
      "2.gravatar.com",
      "i.ytimg.com",
      "cdn.sanity.io",
"video.vimeo.com",
"Vimeo.com",


    ],
  },
});
