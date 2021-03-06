module.exports = {
    info: {
        name: "ZeresPluginLibrary",
        authors: [{
            name: "Zerebos",
            discord_id: "249746236008169473",
            github_username: "rauenzi",
            twitter_username: "ZackRauen"
        }],
        version: "1.2.22",
        description: "Gives other plugins utility functions and the ability to emulate v2.",
        github: "https://github.com/rauenzi/BDPluginLibrary",
        github_raw: "https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js"
    },
    changelog: [
        {
            title: "Bugs Squashed",
            type: "fixed",
            items: [
                "Hotfix for the UserPopout component. This fixes crashes for StatusEverywhere, RoleMembers, and AccountDetailsPlus."
            ]
        }
    ],
    main: "plugin.js"
};