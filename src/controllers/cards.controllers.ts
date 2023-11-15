import { fetchCards } from "../models/cards.models";

export const getCards = (req, res) => {
    fetchCards().then((cards) => {
        res.status(200).send({cards})
    });
};