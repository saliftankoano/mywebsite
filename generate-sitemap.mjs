import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// For resolving __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the paths for your site
const paths = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/portfolio", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
  // Add more paths as needed
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: "https://saliftankoano.com" });

// Write the sitemap to the 'public' directory
const writeStream = createWriteStream(path.join(__dirname, "", "sitemap.xml"));

// Pipe the paths to the sitemap stream
paths.forEach((path) => sitemap.write(path));

// End the stream
sitemap.end();

// Convert the stream to a promise and write to the file
streamToPromise(sitemap)
  .then((data) => writeStream.write(data))
  .catch((error) => console.error(error));
