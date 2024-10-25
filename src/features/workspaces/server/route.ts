import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createWorkspaceSchema } from "../schemas";
import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, IMAGES_ID, WORKSPACE_ID } from "@/config";
import { ID } from "node-appwrite";

const app = new Hono().post(
  "/",
  zValidator("json", createWorkspaceSchema),
  sessionMiddleware,
  async (c) => {
    const database = c.get("databases");
    const storage = c.get("storage");
    const user = c.get("user");

    const { name, image } = c.req.valid("json");

    let uploadImageUrl: string | undefined;

    if (image instanceof File) {
      const file = await storage.createFile(IMAGES_ID, ID.unique(), image);

      const arrayBuffer = await storage.getFilePreview(IMAGES_ID, file.$id);

      uploadImageUrl = `data:image/png;base64,${Buffer.from(
        arrayBuffer
      ).toString("base64")}`;
    }

    const workspace = await database.createDocument(
      DATABASE_ID,
      WORKSPACE_ID,
      ID.unique(),
      {
        name,
        imageUrl: uploadImageUrl,
        userId: user.$id,
      }
    );

    return c.json({ data: workspace });
  }
);

export default app;
