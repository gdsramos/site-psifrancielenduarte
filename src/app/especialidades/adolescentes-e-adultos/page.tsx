import type { Metadata } from "next";
import { Brain, CircleGauge, ListChecks } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Adolescentes e Adultos",
  description:
    "Psicoterapia para adolescentes e adultos em Pelotas/RS e online, com escuta acolhedora e cuidado clínico.",
};

const areas = [
  {
    icon: CircleGauge,
    title: "Adolescentes",
    text: "Um espaço para acolher mudanças, emoções intensas, relações, rotina e desafios próprios dessa fase.",
  },
  {
    icon: Brain,
    title: "Adultos",
    text: "Psicoterapia online ou presencial para compreender experiências, conflitos emocionais e formas de se relacionar.",
  },
  {
    icon: ListChecks,
    title: "Autonomia e bem-estar",
    text: "Acompanhamento para reconhecer padrões, nomear emoções e construir recursos possíveis no cotidiano.",
  },
];

export default function AdolescentsAndAdultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Atendimento"
        title="O adulto de hoje também merece cuidado."
        description="Olhar para o adulto que você se tornou, ou está se tornando, é muitas vezes abraçar a criança que ainda vive dentro de você. A psicoterapia apoia sua busca por autoconhecimento, equilíbrio emocional e ressignificação das vivências que marcaram sua história."
      />
      <section className="py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-terracotta">Para diferentes fases</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">Cuidado quando algo pede escuta, pausa e elaboração.</h2>
            </div>
            <p className="text-base leading-8 text-brand-dark/75 sm:text-lg">
              O acompanhamento terapêutico ajuda a reconhecer padrões, compreender emoções e encontrar formas mais possíveis de viver relações, mudanças e conflitos internos, sempre respeitando o seu ritmo.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 sm:mt-14">
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="rounded-[1.35rem] border border-brand-beige bg-white p-6 shadow-[0_12px_30px_rgba(66,48,37,0.05)] sm:rounded-[1.75rem] sm:p-8">
                  <Icon className="size-8 text-brand-terracotta" aria-hidden="true" />
                  <h3 className="mt-6 font-serif text-2xl">{area.title}</h3>
                  <p className="mt-3 leading-7 text-brand-dark/75">{area.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-brand-dark py-16 text-brand-offwhite sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <h2 className="font-serif text-3xl leading-tight sm:text-5xl">O primeiro passo pode ser uma conversa simples.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-offwhite/75 sm:text-lg">
            Me chame no WhatsApp para entender modalidade, horários e próximos passos.
          </p>
          <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-brand-beige-warm px-6 py-4 font-bold text-brand-dark transition hover:bg-brand-cream">
            Fale comigo
          </a>
        </div>
      </section>
    </>
  );
}
