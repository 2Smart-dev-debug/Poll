let currentPoll = global.currentPoll || null;

export default async function handler(req, res) {
  res.status(200).json(currentPoll || { active: false });
}
