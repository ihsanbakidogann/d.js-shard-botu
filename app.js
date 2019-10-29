'use strict'

const Discord = require("discord.js");
const config = require("./config.json");
const prefix = config.prefix;

const client = new Discord.Client({
  shardId: process.argv[1],
  shardCount: process.argv[2],
  fetchAllMembers: true
});


client.on("ready", () => {
  client.user.setGame("bot online!"); // botun oynuyor kısmı.
  client.user.setStatus("online"); // online, dnd ve idle yazabilirsiniz.
  console.log("Ben hazırım") // bot hazır olduğu zamanda konsola bu yazıyı gönderir.
});

