global.config = global.config || {};

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { token, ...data } = req.body;

    if (token !== "SUPER_RANDOM_TOKEN") {
        return res.status(403).json({ error: "Unauthorized" });
    }

    global.config = data;

    res.json({ success: true });
}