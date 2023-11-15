import * as fs from "fs/promises";
import { formatSizes, getUrl } from "../cardFunctions";

export const fetchCards = async () => {
    const cards = await fs.readFile(`${__dirname}/../data/cards.json`, "utf8");
    const parsedCards = JSON.parse(cards);

    const transformedCards = [];
    for (let i = 0; i < parsedCards.length; i++){
        const templateId = parsedCards[i].pages[0].templateId;
        const imageUrl = await getUrl(templateId);
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
        
        let transformedCard;
        for(let i = 0; i < parsedCards.length; i++){
                const templateId = parsedCards[i].pages[0].templateId;
                const imageUrl = await getUrl(templateId);
                if(parsedCards[i].id === cardId) transformedCard = {
                        "title": parsedCards[i].title,
                        imageUrl,
                        "card_id": cardId,
                        "base_price": parsedCards[i].basePrice,
                        "availableSizes": formatSizes(parsedCards[i].sizes),
                        "pages": parsedCards[i].pages
                };
        }
        return transformedCard;
}