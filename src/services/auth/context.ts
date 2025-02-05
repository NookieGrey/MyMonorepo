import { createContext } from "react";
import { AuthContext } from "./type.ts";

export const authContext = createContext<AuthContext>({});
