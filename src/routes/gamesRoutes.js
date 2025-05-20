import express from "express";
import GameController from "../controllers/gameController.js";

const gamesRouter = express.Router();

// Rotas de coleções
// GET /coleções - Listar todas as coleções
gamesRouter.get("/", GameController.getAllGames);

// GET /coleções/:id - Obter uma coleção pelo ID
gamesRouter.get("/:id", GameController.getGameById);

// POST /coleções - Criar uma nova coleção
gamesRouter.post("/", GameController.createGame);

// PUT /coleções/:id - Atualizar uma coleção
gamesRouter.put("/:id", GameController.updateGame);

// DELETE /coleções/:id - Remover uma coleção
gamesRouter.delete("/:id", GameController.deleteGame);

export default gamesRouter;
