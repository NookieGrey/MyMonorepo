import { renderRouteServer } from "./router.ts";

export async function render(_url: string) {
  return await renderRouteServer(_url);
}
