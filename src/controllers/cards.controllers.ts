import { fetchCards, fetchCardById } from "../models/cards.models";

export const getCards = (req, res) => {
    fetchCards().then((cards) => {
        res.status(200).send(cards)
    });
};

export const getCardById = (req, res) => {
    const { cardId } = req.params;
    fetchCardById(cardId).then((card) => {
        res.status(200).send(card)
    });
}