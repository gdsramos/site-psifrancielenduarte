import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Camera, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#F5EAD8] text-brand-dark">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.15fr_0.75fr_1fr] md:gap-10 md:py-14">
        <div>
          <Link href="/" className="relative block h-32 w-44 sm:h-44 sm:w-56" aria-label="Página inicial de Francielen Duarte">
            <Image
              src={profile.logoComplete}
              alt="Logotipo Francielen Duarte, Psicóloga Clínica"
              fill
              sizes="240px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-brand-dark/75">
            Um espaço de escuta acolhedora para crianças neurodivergentes, adolescentes e adultos, com cuidado humano e apoio às famílias.
          </p>
          <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-rose-burnt">
            <MessageCircle className="size-4" aria-hidden="true" /> Fale comigo
          </a>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-terracotta">Navegação</p>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-brand-dark/75">
            <Link href="/sobre" className="transition hover:text-brand-terracotta">Sobre mim</Link>
            <Link href="/especialidades/psicologia-infantil-e-tea" className="transition hover:text-brand-terracotta">Psicologia infantil e ABA</Link>
            <Link href="/#especialidades-titulo" className="transition hover:text-brand-terracotta">Como posso ajudar</Link>
            <Link href="/#faq-titulo" className="transition hover:text-brand-terracotta">Dúvidas frequentes</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-terracotta">Contato e redes</p>
          <div className="mt-4 space-y-3 text-sm text-brand-dark/75">
            <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-brand-terracotta"><MessageCircle className="size-4" aria-hidden="true" /> WhatsApp para agendamento</a>
            <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-brand-terracotta transition hover:text-brand-rose-burnt"><Camera className="size-4" aria-hidden="true" /> Instagram {profile.instagramHandle}</a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-brand-terracotta"><BriefcaseBusiness className="size-4" aria-hidden="true" /> LinkedIn</a>
            <p className="flex items-center gap-2"><MapPin className="size-4" aria-hidden="true" /> {profile.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-dark/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs leading-6 text-brand-dark/60 sm:px-8">
          <p>{profile.fullName} | Psicóloga Clínica | {profile.crp}</p>
          <p className="mt-3">© {new Date().getFullYear()} Francielen Duarte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
