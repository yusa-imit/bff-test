import { Elysia, t } from "elysia";

export const MySampleModel = new Elysia({
  name: "Model.Sample.MySample",
}).model({
  "Index.Get.Req.Params": t.Object({
    count: t.Numeric({
      error: () => {
        return "Count is not provided";
      },
    }),
  }),
  "Index.Get.Res": t.Object({
    list: t.Array(t.Number()),
  }),
});
