import { fetchCards, fetchCardById } from "../models/cards.models";

export const getCards = async (req, res) => {
    const cards = await fetchCards();
    res.status(200).send(cards);
};

export const getCardById = async (req, res) => {
    const { cardId } = req.params;
    const card = await fetchCardById(cardId);
    res.status(200).send(card);
}