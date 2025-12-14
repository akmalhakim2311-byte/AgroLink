import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const TOKEN = "YOUR_ACCESS_TOKEN";
const PHONE_NUMBER_ID = "YOUR_PHONE_NUMBER_ID";

app.post("/send-whatsapp", async (req, res) => {
  const { message } = req.body;

  const response = await fetch(
    `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: "60174909836",
        type: "text",
        text: { body: message }
      })
    }
  );

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () =>
  console.log("WhatsApp server running on port 3000")
);
