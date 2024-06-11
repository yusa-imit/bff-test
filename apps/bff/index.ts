import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { route } from "./routes";

const app = new Elysia()
  .use(route)
  .state("version", 1)
  .use(
    swagger({
      documentation: {
        info: {
          title: "BFF Testing Server",
          version: "1.0.0",
        },
      },
    })
  )
  .listen(3000);

export type ElysiaServer = typeof app;
