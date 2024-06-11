import { Elysia, t } from "elysia";

export const SampleDto = new Elysia({ name: "Model.Sample.MySample" }).model({
  list: t.String(),
});
