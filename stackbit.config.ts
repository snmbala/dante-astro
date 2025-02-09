import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "astro",
  postInstallCommand: "npm i --no-save @stackbit/types",
  contentSources: [
    new GitContentSource({
      rootPath: "src", // Set rootPath to "src" since your content is inside src/
      contentDirs: ["src/content"], // Update contentDirs to match your structure
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
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});