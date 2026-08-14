"use client";

import { useEffect, useRef, useState } from "react";
import { SpinnerGap, PaperPlaneRight, Sparkle } from "@phosphor-icons/react/dist/ssr";

interface ChatMessage {
  id: number;
  content: string;
  author: "bancario" | "portal";
  createdAt: string;
}

const suggestions = [
  "O que é Selic e como ela mexe com o meu dinheiro?",
  "Diferença entre CDB e LCI?",
  "O que é marcação a mercado?",
  "Como funciona o Tesouro IPCA+?",
];

export function ChatTool() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    fetch("/api/chat")
      .then((r) => r.json())
      .then((data) => setMessages(data.messages ?? []))
      .catch(() => setError("Não foi possível carregar as mensagens."));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(content: string) {
    if (!content.trim() || loading) return;
    setLoading(true);
    setError(null);
    setInput("");

    const optimistic: ChatMessage = {
      id: ++idRef.current,
      content,
      author: "bancario",
      createdAt: new Date().toISOString(),
    };
    setMessages((m) => [...m, optimistic]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content }),
        cache: "no-store",
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          id: ++idRef.current,
          content: data.reply ?? "Não foi possível gerar uma resposta.",
          author: "portal",
          createdAt: new Date().toISOString(),
        },
      ]);
    } catch {
      setError("Falha ao enviar. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-[55vh] flex-col gap-3 overflow-y-auto rounded-2xl border hairline bg-surface p-4">
        {messages.length === 0 && !error ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <Sparkle size={24} className="text-emerald-500" />
            <p className="max-w-[34ch] text-[13px] text-foreground/50">
              Faça uma pergunta sobre juros, renda fixa, crédito, produtos ou o que está
              acontecendo no mercado.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border hairline bg-background px-3 py-1.5 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.author === "bancario" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                m.author === "bancario"
                  ? "rounded-br-sm bg-emerald-500 text-emerald-950"
                  : "rounded-bl-sm border hairline bg-background text-foreground/85"
              }`}
            >
              <p>{m.content}</p>
            </div>
          </div>
        ))}

        {loading ? (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border hairline bg-background px-4 py-2.5 text-[13px] text-foreground/50">
              <SpinnerGap size={14} className="animate-spin" /> pensando...
            </div>
          </div>
        ) : null}
        <div ref={bottomRef} />
      </div>

      {error ? (
        <p className="rounded-xl border border-rose-500/25 bg-rose-500/5 px-4 py-2 text-[12px] text-rose-300">
          {error}
        </p>
      ) : null}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunte sobre o mercado, produtos ou termos..."
          aria-label="Sua pergunta"
          className="h-12 flex-1 rounded-xl border hairline bg-surface px-4 text-sm outline-none transition placeholder:text-foreground/35 focus:border-emerald-500/60"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Enviar pergunta"
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-emerald-950 transition hover:bg-emerald-400 active:scale-95 disabled:opacity-50"
        >
          <PaperPlaneRight size={18} weight="bold" />
        </button>
      </form>

      <p className="text-[11px] leading-relaxed text-foreground/40">
        Respostas educacionais geradas com apoio do copiloto do portal. Não é recomendação
        personalizada de investimento, crédito ou seguro. Não compartilhe dados pessoais
        sensíveis aqui.
      </p>
    </div>
  );
}
