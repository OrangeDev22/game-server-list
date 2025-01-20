export type GameServer = {
  id: number;
  name: string;
  game: string;
  players: string;
  status: "online" | "offline";
  type: string;
  region: string;
  mods: string[];
  version: string;
};
