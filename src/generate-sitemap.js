const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// Cấu hình các URL của bạn
const links = [
  { url: "/forum", changefreq: "daily", priority: 0.3 },
  { url: "/school", changefreq: "daily", priority: 0.3 },
  { url: "/school-detail", changefreq: "daily", priority: 0.3 },
];

if (links.length === 0) {
  console.error("No URLs provided for the sitemap.");
  process.exit(1);
}

// Khởi tạo sitemap stream
const sitemap = new SitemapStream({
  hostname: "https://www.weloveschool.net/",
});

// Tạo stream ghi vào tệp sitemap.xml
const writeStream = createWriteStream(
  path.join(__dirname, "..", "public", "sitemap.xml")
);

writeStream.on("error", (error) => {
  console.error("Error writing to sitemap file:", error);
});

// Ghi các URL vào sitemap
sitemap.pipe(writeStream);
links.forEach((link) => sitemap.write(link));
sitemap.end();

// Hoàn thành việc tạo sitemap
streamToPromise(sitemap)
  .then(() => {
    console.log("Sitemap created successfully!");
  })
  .catch((error) => {
    console.error("Error creating sitemap:", error);
  });
