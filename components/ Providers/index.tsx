"use client";

import * as React from "react";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        {children}
        <Toaster richColors />
      </SessionProvider>
    </>
  );
};

export default Providers;
