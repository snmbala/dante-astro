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
            name: "Post",
            type: "page",
            urlPath: "/blog/{slug}",
            filePath: "src/content/blog/{slug}.md", // Adjust filePath to src/content
            fields: [
              { name: "title", type: "string", required: true, default: "Post Title" },
              { name: "excerpt", type: "string", required: false },
              { name: "publishDate", type: "date", required: true },
              { name: "pageType", type: "string", required: false, default: "article" }, // ✅ Added pageType
              { name: "tags", type: "list", required: false, items: { type: "string" } },
              {
                name: "seo",
                type: "object",
                required: false,
                fields: [
                  { name: "title", type: "string", required: false },
                  { name: "description", type: "string", required: false },
                  {
                    name: "image",
                    type: "object",
                    required: false,
                    fields: [
                      { name: "src", type: "string", required: true },
                      { name: "alt", type: "string", required: false },
                    ],
                  },
                ],
              },
            ]
            
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