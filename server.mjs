// Sanity checks (won't print secrets, only presence)
if (!process.env.STRIPE_SECRET_KEY)  console.warn("STRIPE_SECRET_KEY not set");
if (!process.env.STRIPE_WEBHOOK_SECRET) console.warn("STRIPE_WEBHOOK_SECRET not set");
import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (_req, res) => res.send("🏈 Baller AI Trainer API is running."));
app.get("/health", (_req, res) => res.json({ ok: true, ts: Date.now() }));

app.listen(port, () => console.log(`Server listening on :${port}`));
