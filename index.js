const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Legit Discord Nitro Server",
        state: "Nitro | Robux Rewards Running",
        startTimestamp: new Date(),
        largeImageKey: "nitro",
        largeImageText: "Nitro in 2 Invites",
        smallImageKey: "boost",
        smallImageText: "100% Legit",
        buttons: [
            { label: "Join Server", url: "https://discord.gg/GNVj6HBYZB" },
            { label: "Invite Bot", url: "https://dsc.gg/dtsmod.gq" }
        ]

    });

    console.log("rpc is on");
})

rpc.login({
    clientId: "787414040548605983"
})