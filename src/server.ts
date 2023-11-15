import * as express from "express";
import { getCards,getCardById } from "./controllers/cards.controllers";

export const app = express()

app.set('json spaces', 2);

app.get('/cards', getCards)

app.get('/cards/:cardId',getCardById)

