import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  experimental: {
    ssg: {
      name: "Astro",
      logPatterns: {
        up: ["is ready", "astro"],
      },
      directRoutes: {
        "socket.io": "socket.io",
      },
      passthrough: ["/vite-hmr/**"],
    },
  },
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content/blog"],
      models: [
        {
            name: "Page",
            type: "page",
            urlPath: "/{slug}",
            filePath: "src/content/pages/{slug}.md", // Adjust filePath to src/content
            fields: [{ name: "title", type: "string", required: true }]
          }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "src/content",
        uploadDir: "_images",
        publicPath: "/src/content/",
      },
    }),
  ],
});