"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/lib/site-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#F5EAD8] bg-[#F5EAD8]">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:h-28 sm:px-8" aria-label="Navegação principal">
        <Link href="/" className="relative block h-20 w-32 shrink-0 sm:h-24 sm:w-40" aria-label="Página inicial de Francielen Duarte">
          <Image
            src={profile.logoComplete}
            alt="Francielen Duarte, Psicóloga Clínica, CRP 07/46556"
            fill
            priority
            sizes="(max-width: 640px) 128px, 160px"
            className="object-contain"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-semibold text-brand-dark/75 transition hover:text-brand-terracotta">
              {item.label}
            </Link>
          ))}
          <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-terracotta px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-rose-burnt">
            Fale comigo
          </a>
        </div>

        <button type="button" onClick={() => setIsOpen((open) => !open)} className="rounded-lg p-2 text-brand-dark lg:hidden" aria-expanded={isOpen} aria-controls="menu-mobile" aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {isOpen && (
        <div id="menu-mobile" className="border-t border-brand-beige bg-[#F5EAD8] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-brand-dark transition hover:bg-brand-cream">
                {item.label}
              </Link>
            ))}
            <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 rounded-full bg-brand-terracotta px-5 py-3 text-center font-bold text-white">
              Fale comigo no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
