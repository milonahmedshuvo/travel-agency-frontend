const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({ hostname: "https://hvarlocalguide.com" });

const writeStream = createWriteStream("./public/sitemap.xml");

// List of static URLs
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly" },
  { url: "/contact", changefreq: "monthly" },
];

urls.forEach((url) => sitemap.write(url));
sitemap.end();

streamToPromise(sitemap).then((data) => {
  writeStream.write(data.toString());
});
