import {renderToString} from "react-dom/server";
import {App} from "./App";
import {createCache, extractStyle} from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";

export function render(location: string) {
  const cache: Entity = createCache();

  const body = renderToString(<App cache={cache} location={location}/>);

  const head = extractStyle(cache);

  return {body, head};
}
