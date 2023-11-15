import * as fs from "fs/promises";

export const fetchCards = async () => {
    const cards = await fs.readFile(`${__dirname}/../data/cards.json`, "utf8");
    const parsedCards = JSON.parse(cards);

    const templates = await fs.readFile(`${__dirname}/../data/templates.json`, "utf-8");
    const parsedTemplates = JSON.parse(templates);

    const transformedCards = [];
    for (let i = 0; i < parsedCards.length; i++){
        const matchingTemplate = parsedTemplates.find(template => template.id === parsedCards[i].pages[0].templateId);
        const imageUrl = matchingTemplate.imageUrl;
        transformedCards.push({
            "title": parsedCards[i].title,
            imageUrl,
            "card_id": parsedCards[i].id,
        })
    }

    return transformedCards;
}