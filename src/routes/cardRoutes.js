import express from "express";
import CardController from "../controllers/cardController.js";

const cardsRouter = express.Router();

// Rotas de cartas
// GET /cartas - Listar todas as cartas
cardsRouter.get("/", CardController.getAllCards);

// GET /cartas/:id - Obter uma carta pelo ID
cardsRouter.get("/:id", CardController.getCardById);

// POST /cartas - Criar uma nova carta
cardsRouter.post("/", CardController.createCard);

// PUT /cartas/:id - Atualizar uma carta
cardsRouter.put("/:id", CardController.updateCard);

// DELETE /cartas/:id - Remover uma carta
cardsRouter.delete("/:id", CardController.deleteCard);

export default cardsRouter;