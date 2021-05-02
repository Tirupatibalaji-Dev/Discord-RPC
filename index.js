const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Legit Discord Nitro Server", // First Sub Title
        state: "Nitro | Robux Rewards Running", // Second Sub Title
        startTimestamp: new Date(), // Time
        largeImageKey: "nitro", // Big Image
        largeImageText: "Nitro in 2 Invites", // Bit Image Name
        smallImageKey: "boost", // Small Image
        smallImageText: "100% Legit", // Small Image Name
        buttons: [
            { label: "Join Server", url: "https://discord.gg/GNVj6HBYZB" }, // Button One
            { label: "Invite Bot", url: "https://dsc.gg/dtsmod.gq" } // Button Two
        ]

    });

    console.log("rpc is on");
})

rpc.login({
    clientId: "<client_id>" // Client ID
})
