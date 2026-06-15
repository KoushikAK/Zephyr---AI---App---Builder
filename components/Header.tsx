"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="relative w-full max-w-7xl">
        {/* Ambient Glow */}
        <div className="absolute -inset-8 bg-gradient-to-r from-violet-500/10 via-cyan-500/5 to-violet-500/10 blur-[100px]" />

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-[1px]">
          <div className="h-full w-full rounded-[28px] bg-black/80" />
        </div>

        {/* Main Shell */}
        <div
          className="
          relative
          flex
          h-[72px]
          items-center
          justify-between
          overflow-hidden
          rounded-[28px]
          border
          border-white/[0.06]
          bg-black/[0.55]
          px-7
          backdrop-blur-[40px]
          shadow-[0_20px_120px_rgba(0,0,0,0.65)]
        "
        >
          {/* Internal Light Reflection */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%)]" />
          </div>

          {/* LEFT */}
          <div className="flex items-center gap-12">
            <Link href="/" className="group relative flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-violet-500/20 blur-xl transition-all duration-500 group-hover:bg-violet-400/30" />
              </div>

              <div className="leading-none">
                <Image
                  src="/logo-short2.png"
                  alt="Forge"
                  width={70}
                  height={70}
                  className="relative rounded-xl transition-transform duration-500 group-hover:scale-105"
                />

                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/25">
                  AI APP BUILDER
                </p>
              </div>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <Show when="signed-in">
              <Link
                href="/projects"
                className="
                text-sm
                font-medium
                text-white/50
                transition-colors
                hover:text-white
              "
              >
                Projects
              </Link>

              <div
                className="
                hidden
                sm:flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.03]
                px-3
                py-2
              "
              >
                <div className="h-2 w-2 rounded-full bg-violet-400" />
                <span className="text-xs text-white/70">120 Credits</span>
              </div>

              <UserButton />
            </Show>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="
                  h-10
                  rounded-xl
                  text-white/55
                  hover:bg-white/[0.04]
                  hover:text-white
                "
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignInButton mode="modal">
                <Button
                  className="
                  group
                  relative
                  h-11
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white
                  px-6
                  font-medium
                  text-black
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]
                "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Building
                    <ArrowRight
                      className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    />
                  </span>

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-black/5
                    to-transparent
                    translate-x-[-200%]
                    transition-transform
                    duration-1000
                    group-hover:translate-x-[200%]
                  "
                  />
                </Button>
              </SignInButton>
            </Show>
          </div>
        </div>
      </nav>
    </header>
  );
}
