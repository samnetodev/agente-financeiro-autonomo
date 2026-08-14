"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Crosshair, List, X } from "@phosphor-icons/react/dist/ssr";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/radar", label: "Radar" },
  { href: "/explique", label: "Explique" },
  { href: "/guias", label: "Guias" },
  { href: "/glossario", label: "Glossário" },
  { href: "/faq", label: "FAQ" },
  { href: "/ferramentas", label: "Ferramentas" },
  { href: "/chat", label: "Chat" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b hairline transition-colors",
        scrolled ? "bg-background/85 backdrop-blur-md" : "bg-background"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
            <Crosshair size={20} weight="bold" className="text-emerald-400" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">
              Agente Financeiro <span className="text-emerald-400">Autônomo</span>
            </span>
            <span className="font-mono-nums text-[9px] uppercase tracking-[0.2em] text-foreground/40">
              agente de IA
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] font-medium transition",
                  active
                    ? "bg-emerald-500/10 text-emerald-300"
                    : "text-foreground/65 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border hairline lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X size={16} /> : <List size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t hairline bg-background px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-foreground/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
