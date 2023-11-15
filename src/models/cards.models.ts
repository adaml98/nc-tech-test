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

export const fetchCardById = async (cardId) => {
        const cards = await fs.readFile(`${__dirname}/../data/cards.json`, "utf-8");
        const parsedCards = JSON.parse(cards);

        const templates = await fs.readFile(`${__dirname}/../data/templates.json`, "utf-8");
        const parsedTemplates = JSON.parse(templates);

        let transformedCard;
        for(let i = 0; i < parsedCards.length; i++){
                const matchingTemplate = parsedTemplates.find(template => template.id === parsedCards[i].pages[0].templateId);
        const imageUrl = matchingTemplate.imageUrl;
                if(parsedCards[i].id === cardId) transformedCard = {
                        "title": parsedCards[i].title,
                        imageUrl,
                        "card_id": cardId,
                        "base_price": parsedCards[i].basePrice,
                        "availableSizes": parsedCards[i].sizes,
                        "pages": parsedCards[i].pages
                };
        }
        return transformedCard;
}