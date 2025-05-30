// src/provider.tsx
import React from "react";
import { HeroUIProvider } from "@heroui/system";
import { AuthProvider } from "./contexts/AuthContext"; // مسیر درست context

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </HeroUIProvider>
  );
}
