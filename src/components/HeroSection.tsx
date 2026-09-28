"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BadgeCheck, CalendarDays, Heart } from "lucide-react";
import { profile } from "@/lib/site-data";

const trustItems = [
  { label: profile.crp, icon: BadgeCheck },
  { label: "Infantojuvenil e adultos", icon: Heart },
  { label: "Presencial e online", icon: CalendarDays },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-offwhite">
      <div className="absolute left-0 top-0 h-full w-[42%] rounded-br-[7rem] bg-brand-cream sm:rounded-br-[9rem]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 pb-10 pt-9 sm:px-8 sm:pb-16 sm:pt-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="relative z-10 max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-brand-beige bg-brand-offwhite/85 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-brand-olive sm:px-4 sm:text-sm">
            Psicologia clínica em Pelotas/RS e atendimento online
          </p>
          <h1 className="mt-5 font-serif text-[2.35rem] leading-[1.03] tracking-[-0.02em] text-brand-dark sm:mt-7 sm:text-6xl lg:text-[4.25rem]">
            Um espaço seguro para compreender emoções, acolher experiências e encontrar novos caminhos.
          </h1>
          <div className="mt-6 max-w-xl space-y-3 text-base leading-7 text-brand-dark/78 sm:mt-7 sm:text-lg sm:leading-8">
            <p>Prazer, me chamo Francielen Duarte, mas pode me chamar de Fran.</p>
            <p>
              Meu trabalho une técnica, sensibilidade e cuidado com cada pessoa e sua família para que o processo terapêutico aconteça de forma acolhedora e segura.
            </p>
            <p>
              Atuo com crianças neurodivergentes, adolescentes e adultos, com experiência em Análise do Comportamento Aplicada (ABA) e um olhar atento ao desenvolvimento em cada fase da vida.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-terracotta px-6 py-4 font-bold text-white shadow-[0_12px_26px_rgba(139,73,40,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-rose-burnt">
              Fale comigo <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <Link href="/sobre" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-olive px-6 py-4 font-bold text-brand-dark transition hover:bg-brand-olive hover:text-white">
              Conhecer atendimento <ArrowDown className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[32rem] lg:max-w-none">
          <div className="absolute -right-4 top-9 size-24 rounded-full bg-brand-rose-old/55 sm:-right-8 sm:size-40" aria-hidden="true" />
          <div className="relative aspect-[4/4.65] overflow-hidden rounded-[1.6rem] bg-brand-beige shadow-[0_26px_70px_rgba(66,48,37,0.18)] sm:rounded-[2.5rem]">
            <Image src={profile.image} alt="Francielen Duarte, psicóloga clínica, sorrindo" fill priority sizes="(max-width: 1024px) 92vw, 45vw" className="object-cover object-[58%_46%]" />
          </div>
          <div className="absolute -bottom-4 -left-2 max-w-60 rounded-2xl bg-brand-offwhite px-4 py-3 shadow-[0_12px_35px_rgba(66,48,37,0.16)] sm:-bottom-5 sm:-left-8 sm:px-5 sm:py-4">
            <p className="font-serif text-base leading-6 text-brand-dark sm:text-lg">Escuta empática para cada fase do desenvolvimento.</p>
          </div>
        </motion.div>
      </div>
      <div className="relative border-t border-brand-beige/80">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-4 sm:grid-cols-3 sm:px-8 sm:py-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 text-sm font-semibold text-brand-dark/80">
                <Icon className="size-5 text-brand-terracotta" aria-hidden="true" />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
