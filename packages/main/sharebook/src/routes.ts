import { RouterContext } from "universal-router";

export const routes = [
  {
    path: "/chat",
    action: (params: RouterContext) => ({ ...params, templateType: "chat" }),
  },
  {
    path: "",
    action: (params: RouterContext) => ({ ...params, templateType: "home" }),
  },
  {
    path: "/",
    action: (params: RouterContext) => ({ ...params, templateType: "home" }),
  },
  {
    path: "/filter/:genre",
    action: (params: RouterContext) => ({ ...params, templateType: "home" }),
  },
  {
    path: "(.*)",
    action: (params: RouterContext) => ({ ...params, templateType: "404" }),
  },
];
