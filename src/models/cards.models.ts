import * as fs from "fs/promises";
import { getUrl, isValidCardId, formatCard } from "../cardFunctions";

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
    if (!isValidCardId(cardId)) {
        throw { status: 400, message: 'Invalid cardId format' };
    }

    const cards = await fs.readFile(`${__dirname}/../data/cards.json`, "utf-8");
    const parsedCards = JSON.parse(cards);

    for (let i = 0; i < parsedCards.length; i++) {
        if (parsedCards[i].id === cardId) {
            return await formatCard(parsedCards[i]);
        }
    }

    throw { status: 404, message: 'Card not found' };
};

export const submitCard = async (cardBody) => {
    const cards = await fs.readFile(`${__dirname}/../data/cards.json`, "utf8");
    const parsedCards = JSON.parse(cards);

    const id = 'card' + ('000' + (parsedCards.length + 1)).slice(-3);
    const newCard = {
        id,
        ...cardBody
    }
    parsedCards.push(newCard);
    const updatedJson = JSON.stringify(parsedCards, null, 2);
    await fs.writeFile(`${__dirname}/../data/cards.json`, updatedJson);
    return formatCard(newCard);
}