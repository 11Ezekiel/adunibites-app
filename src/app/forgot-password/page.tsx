"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 border rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center text-[#f49620]">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Enter your email and we will send you instructions to reset your
          password.
        </p>

        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm text-black">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-[#f49620]" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10"
              />
            </div>
          </div>

          <Button className="w-full bg-[#f49620] text-white hover:bg-[#d97e14]">
            Send Reset Link
          </Button>

          <div className="text-center text-sm text-gray-600">
            <Link href="/login" className="text-[#f49620] hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
