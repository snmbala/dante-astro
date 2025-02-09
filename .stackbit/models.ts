export const allModels = [
    {
        name: "Page",
        type: "page",
        urlPath: "/{slug}",
        filePath: "src/content/pages/{slug}.md",
        fields: [{ name: "title", type: "string", required: true }]
    }
];