import { createContext, useContext } from "react";
import { GlobalContext as Context } from "../models/context.model";

export const GlobalContext = createContext<Context | any>({});
export const useGlobalContext = () => useContext<Context>(GlobalContext);
