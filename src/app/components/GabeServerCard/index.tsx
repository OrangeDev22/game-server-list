import { GameServer } from "@/app/types";
import React from "react";
import { twMerge } from "tailwind-merge";

interface GameServerCardProps {
  gameServer: GameServer;
  onToggleServer: (id: number) => void;
}

const GameServerCard: React.FC<GameServerCardProps> = ({
  gameServer,
  onToggleServer,
}) => {
  const { id, name, game, players, status, version, mods, region, type } =
    gameServer;

  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-sm w-full md:max-w-md lg:max-w-lg">
      <div className="flex justify-between">
        <div className="space-y-2 items-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {name}
          </h3>
          <div className="space-y-1 text-xs">
            <p>{`Region: ${region}`}</p>
            <p>{`Version: ${version}`}</p>
          </div>
        </div>

        <span
          className={twMerge(
            "text-sm font-medium px-3 py-1 rounded-full h-7",
            status === "online"
              ? "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200"
          )}
        >
          {status}
        </span>
      </div>

      <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
        <p>{`Game: ${game}`}</p>
        <p>{`Current Players: ${players}`}</p>
        <p>{`Mode: ${type}`}</p>
        <p>{`Mods: ${mods.length === 0 ? "No" : mods.join(", ")}`}</p>
      </div>

      <button
        onClick={() => onToggleServer(id)}
        className={twMerge(
          "mt-auto w-full py-2 rounded-md text-white font-semibold transition",
          status === "online"
            ? "bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
            : "bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        )}
      >
        {status === "online" ? "Stop Server" : "Start Server"}
      </button>
    </div>
  );
};

export default GameServerCard;
