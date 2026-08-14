"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

function getInitialDark() {
  if (typeof window === "undefined") return true;
  const stored = localStorage.getItem("theme");
  return stored ? stored === "dark" : true;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toggle() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border hairline",
        "text-foreground/70 transition hover:text-emerald-400 active:scale-95"
      )}
    >
      {dark ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
    </button>
  );
}
