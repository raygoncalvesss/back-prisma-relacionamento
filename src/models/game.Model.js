import prisma from "../../prisma/prisma.js";

class GameModel {
  // Obter todas os jogos
  async findAll() {
    const games = await prisma.game.findMany({
      orderBy: {
        createdAt: "desc",
      },

      include: {
        cards: true,
      },
    });

    console.log(games);

    return games;
  }

  // Obter um jogo pelo ID
  async findById(id) {
    const game = await prisma.game.findUnique({
      where: {
        id: Number(id),
      },
    });

    return game;
  }

  // Criar um novo jogo
  async create(name, description, releaseYear) {
    const newGame = await prisma.game.create({
      data: {
        name,
        description,
        releaseYear,
      },
    });

    return newGame;
  }

  // Atualizar um jogo
  async update(
    id,
    name,
        description,
        releaseYear,
  ) {
    const game = await this.findById(id);

    if (!game) {
      return null;
    }

    // Atualize o jogo existente com os novos dados
    const data = {};
    if (name !== undefined) {
      data.name = name;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (releaseYear !== undefined) {
      data.releaseYear = releaseYear;
    }

    const gameUpdated = await prisma.game.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return gameUpdated;
  }

  // Remover um jogo
  async delete(id) {
    const game = await this.findById(id);

    if (!game) {
      return null;
    }

    await prisma.game.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new GameModel();