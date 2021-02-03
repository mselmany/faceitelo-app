import { IPlayer } from "../@types/types";
import player_search from "../mock/player_search.json";

class Api {
  player_search: {
    player_id: string;
    nickname: string;
    status: string;
    games: { name: string; skill_level: string }[];
    country: string;
    verified: boolean;
    avatar: string;
  }[];

  constructor() {
    this.player_search = player_search.items;
  }

  async players(_nickname?: string): Promise<IPlayer[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const players: IPlayer[] = this.player_search
          .filter((player) =>
            !_nickname ? true : player.nickname.toLocaleLowerCase("en").includes(_nickname.toLocaleLowerCase("en"))
          )
          .map((player: any) => {
            const { player_id, nickname, games, country, verified, avatar } = player;
            const { skill_level } = games.find((item: any) => item.name === "csgo");
            return { player_id, nickname, skill_level, country, verified, avatar };
          });
        resolve(players);
      }, 500);
    });
  }

  async player(nicknameOrId: string): Promise<IPlayer | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const player = this.player_search.find((player) => [player.nickname, player.player_id].includes(nicknameOrId));
        if (player) {
          const { player_id, nickname, games, country, verified, avatar } = player;
          const { skill_level } = games.find((item: any) => item.name === "csgo");
          resolve({ player_id, nickname, skill_level, country, verified, avatar });
        }
        reject(new Error("No player found."));
      }, 1000);
    });
  }
}

export default new Api();
