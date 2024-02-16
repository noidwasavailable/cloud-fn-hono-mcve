import { serve } from "@hono/node-server";
import { Hono } from "hono";
const app = new Hono();
app.get("/", (c) => {
    return c.text("Hello Hono!");
});
app.post("/test", async (c) => {
    const requestBody = await c.req.json();
    console.log(requestBody);
    return c.json({ message: requestBody.message });
});
const port = 3000;
console.log(`Server is running on port ${port}`);
serve({
    fetch: app.fetch,
    port,
});
