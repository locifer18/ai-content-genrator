import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials: {
    url: `postgresql://neondb_owner:npg_SWgKZRa0P7Cm@ep-orange-rain-ad5owrni-pooler.c-2.us-east-1.aws.neon.tech/Ai-Content-Generator?sslmode=require&channel_binding=require`,
  },
});
