let messages = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { msg } = req.body;

    if (msg) {
      const newMessage = { msg, time: new Date().toISOString() };
      messages.push(newMessage);
      res.status(200).json({ success: true, message: newMessage });
    } else {
      res.status(400).json({ success: false, error: "Message missing" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
        }
