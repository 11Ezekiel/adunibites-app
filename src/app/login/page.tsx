"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Phone } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 border rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center text-[#f49620]">
          Login to Your Account
        </h1>

        <div className="space-y-4">
          {/* Email */}
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

          {/* Password */}
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
            <div className="text-right mt-1">
              <Link
                href="/forgot-password"
                className="text-xs text-[#f49620] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <Button className="w-full bg-[#f49620] text-white hover:bg-[#d97e14]">
            Login
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <hr className="flex-grow border-t" />
            or login with
            <hr className="flex-grow border-t" />
          </div>

          {/* Social Logins */}
          <div className="flex flex-col justify-between gap-2">
            <Button variant="outline" className="w-full border-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              Gmail
            </Button>
            <Button variant="outline" className="w-full border-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              Phone
            </Button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-[#f49620] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
