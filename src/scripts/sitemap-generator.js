const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({ hostname: "https://hvarlocalguide.com" });

const writeStream = createWriteStream("./public/sitemap.xml");

// List of static URLs
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly" },
  { url: "/contact", changefreq: "monthly" },
  { url: "/tours-experience", changefreq: "monthly" },
  { url: "/acommodation", changefreq: "monthly" },
  { url: "/blog", changefreq: "monthly" },
  { url: "/about-us", changefreq: "monthly" },
  { url: "/sign-up", changefreq: "monthly" },
  { url: "/support", changefreq: "monthly" },
  { url: "/contact", changefreq: "monthly" },
  { url: "/terms", changefreq: "monthly" },
  { url: "/privacy", changefreq: "monthly" },
  { url: "/cookie", changefreq: "monthly" },
  { url: "/service", changefreq: "monthly" },
  { url: "/affiliate-program", changefreq: "monthly" },
];

urls.forEach((url) => sitemap.write(url));
sitemap.end();

streamToPromise(sitemap).then((data) => {
  writeStream.write(data.toString());
});
