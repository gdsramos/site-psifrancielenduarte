import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-brand-cream py-14 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-brand-terracotta transition hover:text-brand-rose-burnt">
          <ArrowLeft className="size-4" aria-hidden="true" /> Voltar ao início
        </Link>
        <p className="mt-9 text-sm font-bold uppercase tracking-[0.16em] text-brand-terracotta">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-brand-dark sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-brand-dark/75 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
