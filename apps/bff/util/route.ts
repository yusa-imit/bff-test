import type { ElysiaServer } from "..";

export function createRoute(
  controller: (app: ElysiaServer) => void
): (app: ElysiaServer) => void {
  return controller;
}
