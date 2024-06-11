import Elysia, { error } from "elysia";
import { MySampleService } from "../../../service/sample/mySample/mySampleService";
import { MySampleModel } from "../../../model/sample/mySample/mySampleModel";

export const mySampleController = new Elysia().use(MySampleModel).get(
  "/",
  ({ params }) => {
    return {
      list: MySampleService.getMySample(params.count),
    };
  },
  { response: "Index.Get.Res", params: "Index.Get.Req.Params" }
);
