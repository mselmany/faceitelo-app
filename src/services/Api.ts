import { IPlayer } from "../typings/types";
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
    const players: IPlayer[] = this.player_search
      .filter((player) =>
        !_nickname ? true : player.nickname.toLocaleLowerCase("en").includes(_nickname.toLocaleLowerCase("en"))
      )
      .map((player: any) => {
        const { player_id, nickname, games, country, verified, avatar } = player;
        const { skill_level } = games.find((item: any) => item.name === "csgo");
        return { player_id, nickname, skill_level, country, verified, avatar };
      });
    return players;
  }
}

export default new Api();
