import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { absoluteUrl } from "@/lib/utils";

const SITE = "Agente Financeiro Autônomo";
const DESCRIPTION =
  "Um agente de IA que vigia o mercado, explica o que importa e traduz cada indicador em conversa consultiva. Fontes oficiais em tudo.";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: `${SITE} — Central de Inteligência para o Mercado Financeiro`,
    template: `%s — ${SITE}`,
  },
  description: DESCRIPTION,
  applicationName: SITE,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    siteName: SITE,
    title: `${SITE} — Comece o dia sabendo o que importa.`,
    description: DESCRIPTION,
    url: absoluteUrl("/"),
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className="dark"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
