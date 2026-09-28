import type { Metadata } from "next";
import { HeartHandshake, Lightbulb, UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Psicologia Infantil e Neurodesenvolvimento",
  description:
    "Acompanhamento psicológico infantil, adolescentes, TEA e neurodivergências em Pelotas/RS.",
};

const supports = [
  {
    icon: HeartHandshake,
    title: "Desenvolvimento infantil",
    text: "Acompanhamento que observa habilidades, desafios, autonomia e potencialidades de cada criança.",
  },
  {
    icon: Lightbulb,
    title: "TEA e neurodivergências",
    text: "Intervenções embasadas em ABA, com objetivos possíveis e estratégias adaptadas à rotina.",
  },
  {
    icon: UsersRound,
    title: "Família e escola",
    text: "Orientações para aproximar responsáveis e rede de apoio do processo terapêutico.",
  },
];

export default function ChildPsychologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Cuidar do começo"
        title="Infância, adolescência e neurodesenvolvimento."
        description="Acolher a infância e acompanhar as travessias da adolescência é proteger raízes. O atendimento oferece um espaço leve e respeitoso para que crianças e jovens possam dar nome às emoções enquanto descobrem quem são."
      />
      <section className="py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl leading-tight sm:text-5xl">Um cuidado que começa pela escuta da criança e da família.</h2>
            <p className="mt-6 text-base leading-8 text-brand-dark/75 sm:text-lg">
              O acompanhamento se inicia com uma compreensão cuidadosa da rotina, das demandas e dos recursos da criança ou adolescente. A partir disso, construímos um plano terapêutico personalizado, com embasamento técnico, sensibilidade e objetivos significativos para o desenvolvimento.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3 sm:mt-12">
            {supports.map((support) => {
              const Icon = support.icon;
              return (
                <article key={support.title} className="rounded-[1.35rem] border border-brand-beige bg-brand-cream p-6 sm:rounded-[1.75rem] sm:p-8">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-terracotta"><Icon className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-6 font-serif text-2xl">{support.title}</h3>
                  <p className="mt-3 leading-7 text-brand-dark/75">{support.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <h2 className="font-serif text-3xl leading-tight sm:text-5xl">Quer conversar sobre as necessidades da sua família?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-dark/75 sm:text-lg">
            No primeiro contato, você pode tirar dúvidas e entender como o acompanhamento pode acontecer.
          </p>
          <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-brand-terracotta px-6 py-4 font-bold text-white transition hover:bg-brand-rose-burnt">
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
