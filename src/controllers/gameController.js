import GameModel from "../models/game.Model.js";

class GameController {
  // GET /api/jogos
  async getAllGames(req, res) {
    try {
      const games = await GameModel.findAll();
      res.json(games);
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
      res.status(500).json({ error: "Erro ao buscar jogos" });
    }
  }

  // GET /api/jogos/:id
  async getGameById(req, res) {
    try {
      const { id } = req.params;

      const game = await GameModel.findById(id);

      if (!game) {
        return res.status(404).json({ error: "Jogo não encontrado" });
      }

      res.json(game);
    } catch (error) {
      console.error("Erro ao buscar jogo:", error);
      res.status(500).json({ error: "Erro ao buscar jogo" });
    }
  }

  // POST /api/jogos
  async createGame(req, res) {
    try {
      // Validação básica
      const {
        name,
        description,
        releaseYear,
      } = req.body;

      // Verifica se todos os campos do jogo foram fornecidos
      if (
        !name ||
        !releaseYear 
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo jogo
      const newGame = await GameModel.create(
        name,
        description,
        releaseYear
      );

      if (!newGame) {
        return res.status(400).json({ error: "Erro ao criar jogo" });
      }

      res.status(201).json(newGame);
    } catch (error) {
      console.error("Erro ao criar jogo:", error);
      res.status(500).json({ error: "Erro ao criar jogo" });
    }
  }

  // PUT /api/coleções/:id
  async updateCollection(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        releaseYear,
      } = req.body;

      // Atualizar a coleção
      const updatedCollection = await CollectionModel.update(
        id,
        name,
        description,
        releaseYear
      );

      if (!updatedCollection) {
        return res.status(404).json({ error: "Coleção não encontrado" });
      }

      res.json(updatedCollection);
    } catch (error) {
      console.error("Erro ao atualizar coleção:", error);
      res.status(500).json({ error: "Erro ao atualizar coleção" });
    }
  }

  // DELETE /api/coleções/:id
  async deleteCollection(req, res) {
    try {
      const { id } = req.params;

      // Remover a coleção
      const result = await CollectionModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Coleção não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover coleção:", error);
      res.status(500).json({ error: "Erro ao remover coleção" });
    }
  }
}

export default new CollectionController();
