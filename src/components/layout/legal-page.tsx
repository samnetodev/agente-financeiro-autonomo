export function Page({ eyebrow, title, sub, children }: {
  eyebrow: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[820px] px-4 pb-16 sm:px-6">
      <div className="flex flex-col gap-3 pb-8 pt-14 sm:pt-20">
        <p className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-500">
          {eyebrow}
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {sub ? (
          <p className="max-w-[65ch] text-sm leading-relaxed text-foreground/60 sm:text-base">
            {sub}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="flex flex-col gap-2 text-[14px] leading-relaxed text-foreground/70">
        {children}
      </div>
    </section>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function Meta({ updatedAt }: { updatedAt: string }) {
  return (
    <p className="border-t hairline pt-4 font-mono-nums text-[11px] uppercase tracking-wider text-foreground/40">
      Última atualização: {updatedAt}
    </p>
  );
}
