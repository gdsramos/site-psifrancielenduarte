import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre mim",
  description:
    "Conheça Francielen Duarte, psicóloga clínica em Pelotas/RS, com atuação no desenvolvimento infantil, neurodivergências, adolescentes e adultos.",
};

const foundations = [
  "Escuta acolhedora e livre de julgamentos",
  "Cuidado com crianças, adolescentes e famílias",
  "Experiência em ABA e neurodivergências",
  "Psicoterapia para adultos online e presencial",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mim"
        title="Prazer, me chamo Francielen Duarte, mas pode me chamar de Fran."
        description="Meu trabalho é guiado pela sensibilidade que conecta o desenvolvimento infantil até a fase adulta."
      />
      <section className="py-16 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-brand-beige sm:rounded-[2rem]">
              <Image src={profile.aboutImage} alt="Francielen Duarte, psicóloga clínica" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover object-[55%_44%]" />
            </div>
            <div className="absolute -bottom-6 -right-3 max-w-56 rounded-2xl bg-brand-terracotta p-5 text-white shadow-lg sm:-right-8">
              <Quote className="size-6 text-brand-cream" aria-hidden="true" />
              <p className="mt-2 font-serif text-lg leading-6">Toda história merece ser ouvida com cuidado.</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-terracotta">Minha trajetória</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">A Psicologia como vocação e compromisso com o cuidado humano.</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-brand-dark/78 sm:text-lg">
              <p>
                Ao longo da minha graduação e trajetória clínica, percebi que a sensibilidade no atender e o cuidado com cada pessoa e sua família são bases importantes para que o processo terapêutico funcione.
              </p>
              <p>
                Muitas das nossas inquietações nascem do desejo de compreender como as experiências de vida moldam a forma como sentimos, pensamos e nos relacionamos. Foi nessa busca que encontrei na Psicologia minha vocação: uma ciência rigorosa, mas que se fortalece quando caminha junto ao cuidado humano.
              </p>
              <p>
                Atuo com crianças neurodivergentes, adolescentes e adultos, oferecendo um espaço acolhedor e livre de julgamentos para que cada pessoa possa desenvolver autonomia e bem-estar. Minha prática clínica também conta com experiência em Análise do Comportamento Aplicada (ABA).
              </p>
              <p>
                Acolher a infância e acompanhar as travessias da adolescência é proteger raízes. E olhar para o adulto que você se tornou, ou está se tornando, também pode ser uma forma de abraçar a criança que ainda vive na sua história.
              </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {foundations.map((foundation) => (
                <li key={foundation} className="flex gap-3 rounded-2xl bg-brand-cream p-4 text-sm font-medium leading-6">
                  <CheckCircle2 className="size-5 shrink-0 text-brand-terracotta" aria-hidden="true" />
                  {foundation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-brand-dark py-16 text-brand-offwhite sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-beige-warm">Forma de cuidar</p>
          <p className="mt-6 font-serif text-3xl leading-tight sm:text-5xl">
            "Cuidar também é ajudar a dar nome às emoções, fortalecer raízes e construir novos caminhos com mais autonomia."
          </p>
        </div>
      </section>
    </>
  );
}
