import { MainContext } from "@/data/contexts";
import { useContext } from "react";

export const useMainContext = () => {
  return useContext(MainContext);
}