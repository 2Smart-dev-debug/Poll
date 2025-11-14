let currentPoll = global.currentPoll || null;

export default function handler(req, res) {
    global.currentPoll = currentPoll;
    res.status(200).json(currentPoll || { active: false });
}