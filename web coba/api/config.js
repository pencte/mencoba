export default function handler(req, res) {
    res.json(global.config || {
        server_name: "TerorismePS",
        status: "DOWN",
        online: 0,
        worlds: 0,
        guilds: 0,
        accounts: 0
    });
}