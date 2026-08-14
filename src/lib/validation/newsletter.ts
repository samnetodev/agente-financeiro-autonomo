import { z } from "zod";

export const newsletterSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120),
  email: z.email("Informe um e-mail válido."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
