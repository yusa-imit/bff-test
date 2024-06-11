import { Elysia } from "elysia";
import { mySample } from "./my-sample";

export const sample = new Elysia().group("/sample", (app) => {
  return app.use(mySample);
});
