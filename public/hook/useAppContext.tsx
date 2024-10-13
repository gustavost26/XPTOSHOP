import { useContext } from "react";

import { AuthProvider } from "@/contexts/AuthContext";

export default function useAppContext() {
  const context = useContext(AuthProvider);
  
  if(context === undefined) {
    throw new Error("Não está dentro do contexto!");
  }

  return context;
}