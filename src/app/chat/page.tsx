import type { Metadata } from "next";
import { ChatTool } from "@/components/chat/chat-tool";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Chat do portal",
  description:
    "Pergunte sobre juros, renda fixa, crédito, produtos e mercado. Respostas educacionais com base no banco de conhecimento do portal.",
};

export const dynamic = "force-dynamic";

export default function ChatPage() {
  return (
    <div className="mx-auto max-w-[820px] px-4 pb-16 sm:px-6">
      <PageHeader
        eyebrow="Copiloto do profissional do mercado financeiro"
        title="Chat do portal"
        sub="Respostas em pt-BR com a base de conhecimento oficial do portal (e IA opcional, quando configurada). Conteúdo educacional — não é recomendação."
      />
      <ChatTool />
    </div>
  );
}
