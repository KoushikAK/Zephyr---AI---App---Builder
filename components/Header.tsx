"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ArrowRight, Zap, Sparkles, Terminal, Layers } from "lucide-react";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "./ui/button";
import { ThemeTogglerButton } from "./animate-ui/components/buttons/theme-toggler";
import { PricingModal } from "./PricingModal";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: Layers },
    { label: "Projects", href: "/projects", icon: Terminal },
  ];

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-6 z-50 flex justify-center px-4 transition-all duration-300 ease-out"
      )}
    >
      <nav className="relative w-full max-w-7xl">
        {/* Premium Ambient Glow - Shifting & Dynamic */}
        <div
          className="
            absolute
            -inset-10
            bg-gradient-to-r
            from-blue-600/10
            via-violet-600/5
            to-cyan-600/10
            blur-[100px]
            pointer-events-none
            animate-pulse
          "
        />

        {/* Main Header Card Shell - Uniform Structural Sizing */}
        <div
          className={cn(
            "relative flex h-[74px] items-center justify-between overflow-hidden rounded-[24px] border border-white/[0.08] px-6 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.05)] transition-all duration-300 ease-in-out",
            scrolled ? "bg-black/[0.8] border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.9)]" : "bg-black/[0.55]"
          )}
        >
          {/* Internal Aurora Reflection Mesh */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* LEFT SECTION */}
          <div className="flex items-center gap-8">
            <Link href="/" className="group relative flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
              </div>

              <div className="leading-none hidden sm:block">
                <span className="font-sans font-bold text-base tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 group-hover:to-blue-400 transition-all duration-300">
                  <Image
                  src="/logo-short2.png"
                  alt="Forge"
                  width={58}
                  height={58}
                  className="relative transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
                />
                </span>
                <p className="mt-0.5 text-[8px] uppercase tracking-[0.35em] text-white/30 font-medium">
                  AI APP BUILDER
                </p>
              </div>
            </Link>

            {/* Premium Interactive AI Status Telemetry */}
            <div
              className="
                hidden
                md:flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/15
                bg-emerald-500/5
                pl-2.5
                pr-3
                py-1
                hover:border-emerald-500/30
                hover:bg-emerald-500/10
                transition-all
                duration-300
                cursor-default
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium tracking-wide text-emerald-400/90 uppercase">Engine Online</span>
            </div>
          </div>

          {/* CENTER SECTION - Central Premium Navigation Cluster */}
          <Show when="signed-in">
            <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] rounded-full p-1 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 relative group",
                      isActive ? "text-white bg-white/[0.06] shadow-sm" : "text-white/40 hover:text-white/80"
                    )}
                  >
                    <Icon className={cn("h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110", isActive ? "text-blue-400" : "text-white/40")} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </Show>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">
            <Show when="signed-in">
              <ThemeTogglerButton className="rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] transition-colors" />

              {/* Dynamic Credit Counter with Shimmer Ring */}
              <PricingModal>
                <div
                  className="
                    relative
                    hidden
                    sm:flex
                    cursor-pointer
                    items-center
                    gap-2.5
                    overflow-hidden
                    rounded-full
                    border
                    border-blue-500/20
                    bg-gradient-to-b from-blue-500/[0.08] to-transparent
                    px-4
                    py-1.5
                    transition-all
                    duration-300
                    hover:border-blue-400/40
                    hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]
                    group
                  "
                >
                  <Zap className="h-3.5 w-3.5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-semibold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                    37 Credits
                  </span>
                </div>
              </PricingModal>

              <div className="border-l border-white/10 pl-2 h-6 flex items-center">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8 rounded-full border border-white/20 hover:scale-105 transition-transform"
                    }
                  }} 
                />
              </div>
            </Show>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="
                    h-9
                    rounded-full
                    px-4
                    text-xs
                    font-medium
                    text-white/60
                    hover:bg-white/[0.05]
                    hover:text-white
                    transition-all
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
                    h-9
                    overflow-hidden
                    rounded-full
                    bg-white
                    px-5
                    text-xs
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-white/90
                    hover:scale-[1.02]
                    hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)]
                  "
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600 fill-blue-600/20" />
                    Start Building
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Button>
              </SignInButton>
            </Show>
          </div>
        </div>
      </nav>
    </header>
  );
}