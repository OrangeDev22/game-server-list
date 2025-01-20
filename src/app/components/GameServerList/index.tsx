"use client";
import { GameServer } from "@/app/types";
import { Fragment, useState } from "react";
import GameServerCard from "../GabeServerCard";
import { toggleServer } from "@/app/utils";

const GameServerList = ({ serverList }: { serverList: GameServer[] }) => {
  const [serverListState, setServerListState] = useState(serverList);

  return (
    <Fragment>
      <h1 className="text-3xl font-bold mb-8 text-center">Servers List</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {serverListState.map((server) => (
          <GameServerCard
            key={server.id}
            gameServer={server}
            onToggleServer={(id) =>
              setServerListState(toggleServer(serverListState, id))
            }
          />
        ))}
      </div>
    </Fragment>
  );
};

export default GameServerList;
