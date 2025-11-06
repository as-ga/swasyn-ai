"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Welcome to Swasyn AI
        </h1>
        <Button
          variant="outline"
          className="w-full justify-center flex"
          onClick={() => signIn("google")}
        >
          <Image
            src="/google-icon.svg"
            alt="google-icon"
            width={25}
            height={25}
          />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
