export const IA_CONFIGURED = Boolean(
  process.env.OPENAI_API_KEY || process.env.AI_API_KEY
);

export async function chatCompletion(prompt: string): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY;
  const baseUrl =
    process.env.AI_BASE_URL ?? "https://api.openai.com/v1";
  const model = process.env.AI_MODEL ?? "gpt-4o-mini";

  if (!apiKey) return null;

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "Você é o copiloto educacional de um portal para profissionais do mercado financeiro brasileiros. Responda em pt-BR. NUNCA invente números, fontes, leis ou notícias. NÃO faça recomendação personalizada de investimento nem prometa rentabilidade. Quando não souber, diga: 'Não foi possível verificar essa informação em uma fonte confiável.' Separe: FATO, EXPECTATIVA, INTERPRETAÇÃO, OPINIÃO.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.4,
        max_tokens: 900,
      }),
      signal: AbortSignal.timeout(20000),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? null;
  } catch {
    return null;
  }
}

export function buildExplainPrompt(consulta: string): string {
  return `Explique para um profissional do mercado financeiro: "${consulta}".

Formato de resposta:
### Resumo em 30 segundos
(explicação simples)
### Explicação técnica
(terminologia profissional)
### Por que isso importa?
(impacto)
### Impacto para o cliente
(investimentos, crédito, financiamento, seguros, previdência, câmbio, relacionamento bancário — cite apenas os relevantes)
### Como conversar com o cliente?
(2-3 perguntas consultivas)

Regras: conteúdo educacional; sem promessa de rentabilidade; sem recomendação de produto para pessoa específica; cite fontes oficiais quando aplicável.`;
}
