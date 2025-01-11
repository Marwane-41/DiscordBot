import { REST, Routes } from "discord.js";

const token = process.env["token"];
const client_id = process.env["client_id"];

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(token);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(client_id), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
