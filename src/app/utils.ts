import { GameServer } from "./types";

export const toggleServer = (
  serverList: GameServer[],
  target: number
): GameServer[] => {
  return serverList.map((server) =>
    server.id === target
      ? { ...server, status: server.status === "online" ? "offline" : "online" }
      : server
  );
};
