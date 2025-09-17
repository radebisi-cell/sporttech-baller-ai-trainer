import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (_req, res) => {
  res.send("🏈 Baller AI Trainer API is running.");
});

app.get("/health", (_req, res) => res.json({ ok: true, ts: Date.now() }));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
