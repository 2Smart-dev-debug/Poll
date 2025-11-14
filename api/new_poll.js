export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "POST only" });
    }

    global.currentPoll = {
        active: true,
        question: req.body.question,
        options: req.body.options,
        id: Date.now()
    };

    res.status(200).json({ ok: true, poll: global.currentPoll });
}