import { RouterContext } from "universal-router";

export const routes = [
  {
    path: "",
    action: (params: RouterContext) => ({ ...params, templateType: "home" }),
  },
  {
    path: "/",
    action: (params: RouterContext) => ({ ...params, templateType: "home" }),
  },
  {
    path: "Chats",
    action: (params: RouterContext) => ({ ...params, templateType: "chat" }),
  },
  {
    path: "/Chats",
    action: (params: RouterContext) => ({ ...params, templateType: "chat" }),
  },
  {
    path: "filter/:genre",
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
