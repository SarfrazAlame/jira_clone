import { Hono } from 'hono'
import { handle } from "hono/vercel"
import auth from "@/features/auth/server/route"
import worksapces from "@/features/workspaces/server/route"

const app = new Hono().basePath('/api')

const routes = app
    .route("/auth", auth)
    .route("/workspaces", worksapces)

export const GET = handle(routes)
export const POST = handle(routes)

export type AppType = typeof routes


