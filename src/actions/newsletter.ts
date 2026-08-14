"use server";

import { newsletterSchema } from "@/lib/validation/newsletter";
import { prisma } from "@/lib/db";

export interface NewsletterState {
  success?: string;
  error?: string;
}

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const parsed = newsletterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Dados inválidos.",
    };
  }

  try {
    await prisma.newsletterSubscriber.upsert({
      where: { email: parsed.data.email },
      update: { name: parsed.data.name },
      create: parsed.data,
    });
    return {
      success: "Cadastro recebido! Você passará a receber o Radar do Mercado.",
    };
  } catch {
    return {
      error: "Não foi possível cadastrar agora. Tente novamente em instantes.",
    };
  }
}
