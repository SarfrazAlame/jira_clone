import { Hono } from "hono";

const app = new Hono()
    .post('/login', (c) => {
        return c.json({ success: true })
    })

export default app