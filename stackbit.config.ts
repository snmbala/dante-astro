import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import { allModels } from "./.stackbit/models"; // Ensure the correct path

export default defineStackbitConfig({
    stackbitVersion: "~0.7.0",
    ssgName: "astro",
    nodeVersion: "18",
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ["src/content"],
            models: allModels,
            assetsConfig: {
                referenceType: "static",
                staticDir: "src/content",
                uploadDir: "_images",
                publicPath: "/src/content"
            }
        })
    ],
});