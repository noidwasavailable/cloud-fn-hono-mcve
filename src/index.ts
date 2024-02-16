import { getRequestListener } from "@hono/node-server";
import { Hono } from "hono";
import { onRequest } from "firebase-functions/v2/https";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/test", async (c) => {
  const requestBody = await c.req.json();
  console.log(requestBody);
  return c.json({ message: "Hello Hono!" });
});

app.post("/raw", async (c) => {
  const requestBody = await c.req.raw.clone().json();
  console.log(requestBody);
  return c.json({ message: "Hello Hono!" });
});

export const api = onRequest(getRequestListener(app.fetch));
