import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
    .post('/login',
        zValidator("json", loginSchema),
        (c) => {
            const { email, password } = c.req.valid("json")
            console.log({ email, password })
            return c.json({ success: "ok" })
        })
    .post('/register',
        zValidator("json", registerSchema),
        (c) => {
            const { name, email, password } = c.req.valid("json")
            console.log({ name, email, password })
            return c.json({ success: "ok" })
        }
    )

export default app
