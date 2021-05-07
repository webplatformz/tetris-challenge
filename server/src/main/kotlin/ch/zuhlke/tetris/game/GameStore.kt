package ch.zuhlke.tetris.game

import javax.inject.Singleton

@Singleton
class GameStore {
    private val games: MutableMap<String, Game> = mutableMapOf()

    fun addGame(game: Game) {
        games[game.id] = game;
    }

    fun getAll(): List<Game> = games.values.toList()

    fun getGame(id: String): Game? {
        return games[id]
    }
}
