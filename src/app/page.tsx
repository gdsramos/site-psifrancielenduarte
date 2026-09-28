import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, HeartHandshake, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroSection } from "@/components/HeroSection";
import { SectionReveal } from "@/components/SectionReveal";
import { profile, specialties } from "@/lib/site-data";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Psychotherapist",
  name: "Francielen Duarte - Psicóloga Clínica",
  image: "https://psifrancielenduarte.com.br/images/francielen-hero-centered.jpg",
  "@id": "https://psifrancielenduarte.com.br",
  url: "https://psifrancielenduarte.com.br",
  telephone: `+${profile.phone}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pelotas",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.7654,
    longitude: -52.3376,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "19:00",
  },
  knowsAbout: [
    "Análise do Comportamento Aplicada (ABA)",
    "Transtorno do Espectro Autista (TEA)",
    "Neurodesenvolvimento infantil",
    "Neuropsicologia e desenvolvimento infantil",
    "Atendimento psicológico infantojuvenil",
    "Psicoterapia para adultos",
  ],
};

const approachHighlights = [
  "Experiência em atendimento clínico ao público infantojuvenil e adulto.",
  "Atuação com Análise do Comportamento Aplicada (ABA), especialmente no cuidado com crianças neurodivergentes.",
  "Uma prática guiada pela sensibilidade, pelo cuidado com as famílias e pela construção de autonomia e bem-estar.",
];

const iconBySpecialty = [HeartHandshake, BrainCircuit, Sparkles];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HeroSection />

      <section className="overflow-hidden bg-brand-cream py-16 sm:py-28" aria-labelledby="sobre-titulo">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <SectionReveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-brand-rose-old/50" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-brand-beige shadow-[0_24px_60px_rgba(66,48,37,0.15)] sm:rounded-[2rem]">
              <Image
                src={profile.aboutImage}
                alt="Francielen Duarte, psicóloga clínica"
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover object-[55%_44%]"
              />
            </div>
            <p className="absolute -bottom-5 -right-3 rounded-2xl bg-brand-offwhite px-5 py-4 font-serif text-xl text-brand-terracotta shadow-lg sm:right-[-2.5rem]">
              Escuta que acolhe.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-terracotta">Sobre meu trabalho</p>
            <h2 id="sobre-titulo" className="max-w-xl font-serif text-3xl leading-[1.08] text-brand-dark sm:text-5xl">
              Sensibilidade no atender e cuidado com cada história.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-brand-dark/80 sm:text-lg">
              <p>
                Ao longo da minha trajetória, percebi que a sensibilidade no atender e o cuidado com cada pessoa e sua família são a base para que o processo terapêutico realmente aconteça.
              </p>
              <p>
                Muitas das nossas inquietações nascem do desejo de compreender como as experiências de vida moldam a forma como sentimos, pensamos e nos relacionamos. Foi nessa busca que encontrei na Psicologia minha vocação: uma ciência rigorosa que se fortalece quando aliada ao cuidado humano.
              </p>
              <p>
                Atuo com crianças neurodivergentes, adolescentes e adultos, oferecendo um ambiente acolhedor e livre de julgamentos para que cada pessoa possa desenvolver autonomia e bem-estar.
              </p>
            </div>
            <ul className="mt-8 space-y-4" aria-label="Áreas de atuação clínica">
              {approachHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-brand-dark/80">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand-terracotta" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
            <Link href="/sobre" className="mt-9 inline-flex items-center gap-2 font-semibold text-brand-terracotta transition hover:text-brand-rose-burnt">
              Conheça minha trajetória <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 sm:py-28" aria-labelledby="especialidades-titulo">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-terracotta">Como posso ajudar</p>
            <h2 id="especialidades-titulo" className="font-serif text-3xl leading-tight sm:text-5xl">Cuidado do começo à vida adulta.</h2>
            <p className="mt-5 text-base leading-8 text-brand-dark/75 sm:text-lg">
              A infância, a adolescência e a vida adulta pedem formas diferentes de escuta. Em cada fase, o cuidado é construído com respeito, técnica e acolhimento.
            </p>
          </SectionReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3 sm:mt-12">
            {specialties.map((specialty, index) => {
              const Icon = iconBySpecialty[index] ?? HeartHandshake;
              return (
                <SectionReveal key={specialty.title} delay={index * 0.1} className="h-full">
                  <Link href={specialty.href} className="group flex h-full flex-col rounded-[1.35rem] border border-brand-beige bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-rose-old hover:shadow-[0_20px_45px_rgba(66,48,37,0.10)] focus-visible:-translate-y-1 sm:rounded-[1.75rem] sm:p-8">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-cream text-brand-terracotta sm:size-13"><Icon className="size-6" aria-hidden="true" /></span>
                    <h3 className="mt-6 font-serif text-2xl text-brand-dark">{specialty.title}</h3>
                    <p className="mt-4 flex-grow leading-7 text-brand-dark/75">{specialty.description}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-terracotta">Saiba mais <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 text-brand-offwhite sm:py-24" aria-labelledby="processo-titulo">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionReveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-beige-warm">O primeiro passo</p>
            <h2 id="processo-titulo" className="font-serif text-3xl leading-tight sm:text-5xl">Um caminho possível começa com uma conversa.</h2>
          </SectionReveal>
          <SectionReveal delay={0.12} className="grid gap-4 sm:grid-cols-3">
            {["Você fala comigo pelo WhatsApp.", "Conversamos sobre idade, demanda e modalidade.", "Combinamos o melhor formato de atendimento."].map((step, index) => (
              <div key={step} className="border-t border-brand-beige-warm/45 pt-5">
                <span className="font-serif text-3xl text-brand-beige-warm">0{index + 1}</span>
                <p className="mt-3 leading-7 text-brand-offwhite/80">{step}</p>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      <section className="bg-brand-cream py-16 sm:py-28" aria-labelledby="faq-titulo">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionReveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-terracotta">Dúvidas frequentes</p>
            <h2 id="faq-titulo" className="font-serif text-3xl leading-tight sm:text-5xl">Fale diretamente comigo pelo WhatsApp.</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-brand-dark/75 sm:text-lg">
              Para saber horários, modalidade, valores e entender qual atendimento faz sentido, envie uma mensagem. Eu te respondo por lá.
            </p>
            <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-6 py-4 font-bold text-white transition hover:bg-brand-rose-burnt">
              Fale comigo <MessageCircle className="size-4" aria-hidden="true" />
            </a>
          </SectionReveal>
          <SectionReveal delay={0.1}><FaqAccordion /></SectionReveal>
        </div>
      </section>
    </>
  );
}
