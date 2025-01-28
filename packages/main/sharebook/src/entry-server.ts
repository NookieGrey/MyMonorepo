import { renderRouteServer } from "./router.ts";

export async function render(location: string) {
  return await renderRouteServer(location);
}
