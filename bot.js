﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("689465666058584095")
setInterval(function() {
channel.send(`HalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGBHalimGB`);
}, 30)
})

client.login(process.env.BOT_TOKEN);