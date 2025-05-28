"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User } from "lucide-react";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 border rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center text-[#f49620]">
          Create an Account
        </h1>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm text-black">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-[#f49620]" />
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm text-black">
              Email
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

          <div>
            <Label htmlFor="password" className="text-sm text-black">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-[#f49620]" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
              />
            </div>
          </div>

          <Button className="w-full bg-[#f49620] text-white hover:bg-[#d97e14]">
            Sign Up
          </Button>
        </div>
      </div>
    </main>
  );
}
