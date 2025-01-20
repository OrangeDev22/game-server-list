import GameServerList from "./components/GameServerList";
import { GameServer } from "./types";

/*
  Welcome to the simplegamehosting coding assignment!

  if you got this far great job! 🎉
  Now it's your turn to shine! 🌟
  
  The mock data is fetched from the server and displayed on the page.

  Your task is to create a dynamic card component for each server in the list.
  - The card should display the server's name, game, players, status, version etc, bonus points for displaying any extra data from the json response.
  - please use tailwind to style your components, you can use the existing styles in this file as a reference.
  - You can also use any other libraries you like to help you build the UI.
  
  for extra info please read the README.md file in the root of the project.
*/

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/mock");
  const data: GameServer[] = await response.json();

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen p-8 sm:p-20">
      <GameServerList serverList={data} />
    </main>
  );
}
