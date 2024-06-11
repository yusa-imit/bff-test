import { Elysia } from "elysia";
import { mySampleController } from "../../controller/sample/my-sample/mySampleController";

export const mySample = new Elysia().group("/my-sample", (app) => {
  return app.use(mySampleController);
});
