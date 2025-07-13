import { Hono } from "hono";
import { calculator } from "./calculator";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/calculator", (c) => {
  return c.json({ message: calculator("Sum", 9, 3) });
});

export default app;
