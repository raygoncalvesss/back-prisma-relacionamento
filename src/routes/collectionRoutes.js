import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todos as Coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /personagens/:id - Obter um Personagem pelo ID
//collectionRouter.get("/:id", PersonagemController.getPersonagemById);

// POST /personagens - Criar um novo Personagem
//collectionRouter.post("/", PersonagemController.createPersonagem);

// PUT /personagens/:id - Atualizar um Personagem
//collectionRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /personagens/:id - Remover um Personagem
//collectionRouter.delete("/:id", PersonagemController.deletePersonagem);

export default collectionRouter;
