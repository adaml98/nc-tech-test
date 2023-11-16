import * as express from "express";
import { getCards,getCardById, postCard } from "./controllers/cards.controllers";

export const app = express();

app.use(express.json());

app.set('json spaces', 2);

app.get('/cards', getCards);

app.get('/cards/:cardId',getCardById);

app.post('/cards', postCard);

