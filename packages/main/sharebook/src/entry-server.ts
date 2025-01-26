import { makeRoute } from "./router.ts";

export async function render(_url: string) {
  const html = await makeRoute(_url);

  return { html };
}
