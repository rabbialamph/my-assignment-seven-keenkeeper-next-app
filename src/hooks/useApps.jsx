
import { AppContext } from "../context/appContext.jsx";
import { useContext } from "react";


export const useApps = () => {
  return useContext(AppContext);
};