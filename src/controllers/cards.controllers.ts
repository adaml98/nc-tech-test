import { fetchCards, fetchCardById, submitCard } from "../models/cards.models";

export const getCards = async (req, res) => {
    try {
        const cards = await fetchCards();
        res.status(200).send(cards);
    }catch (error) {
        res.status(error.status).send({ error: error.message });
    }
};

export const getCardById = async (req, res) => {
    try {
        const { cardId } = req.params;
        const card = await fetchCardById(cardId);
        res.status(200).send(card);
    } catch (error) {
        res.status(error.status).send({ error: error.message });
    }
}

export const postCard = async (req, res) => {
    try {
        const newCard = req.body;
        const card = await submitCard(newCard);
        res.status(201).send(card);
    } catch (error){
        res.status(error.status).send({ error: error.message });
    }
}