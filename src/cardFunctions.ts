import * as fs from "fs/promises";

export const formatSizes = (availableSizes) =>{
    const formatedSizes = [];
    for (let i = 0; i < availableSizes.length; i++) {
        if(availableSizes[i] === 'sm'){
            formatedSizes.push({"id": "sm", "title": "Small"})
        } else if (availableSizes[i] === 'md') {
            formatedSizes.push({"id": "md", "title": "Medium"})
        }else if (availableSizes[i] === 'lg') {
            formatedSizes.push({"id": "lg", "title": "Large"})
        }else if (availableSizes[i] === 'gt') {
            formatedSizes.push({"id": "gt", "title": "Giant"})
        };
    }
    return formatedSizes;
}

export const getUrl = async (templateId) => {
    const templates = await fs.readFile(`${__dirname}/./data/templates.json`, "utf-8");
    const parsedTemplates = JSON.parse(templates);

    const matchingTemplate = parsedTemplates.find(template => template.id === templateId);
    const imageUrl = matchingTemplate.imageUrl;
    return imageUrl;
}