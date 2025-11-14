export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  // Parse JSON body
  let body = '';
  for await (const chunk of req) body += chunk;
  let data;
  try {
    data = JSON.parse(body);
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  // Create poll
  global.currentPoll = {
    active: true,
    question: data.question || "No question",
    options: data.options || [],
    id: Date.now()
  };

  res.status(200).json({ ok: true, poll: global.currentPoll });
}
