import Elysia from "elysia";
import { sample } from "./sample";

export const route = new Elysia().group("/api", (app) => {
  return app.use(sample);
});
