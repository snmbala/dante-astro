import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "astro",
    "contentSources": [],
    "postInstallCommand": "npm i --no-save @stackbit/types"
    contentSources: [
        new GitContentSource({
          rootPath: src,
          contentDirs: ["content"],
          models: [
            {
              name: "Page",
              type: "page",
              urlPath: "/{slug}",
              filePath: "content/pages/{slug}.md",
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
})