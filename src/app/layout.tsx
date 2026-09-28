import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Francielen Duarte | Psicóloga Clínica em Pelotas/RS e Online",
    template: "%s | Francielen Duarte",
  },
  description:
    "Psicóloga clínica em Pelotas/RS. Atendimento para crianças neurodivergentes, adolescentes e adultos, com escuta acolhedora, ABA e cuidado humano.",
  keywords: [
    "Psicóloga em Pelotas",
    "Psicóloga infantil Pelotas",
    "ABA Pelotas",
    "Autismo Pelotas",
    "Psicóloga online",
    "Neurodesenvolvimento infantil Pelotas",
    "Francielen Duarte Psicóloga",
  ],
  authors: [{ name: "Francielen Duarte da Silva" }],
  openGraph: {
    title: "Francielen Duarte | Psicologia Clínica",
    description: "Atendimento em Pelotas/RS e online, com cuidado para infância, adolescência e vida adulta.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FBF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-brand-offwhite font-sans text-brand-dark antialiased">
        <a
          href="#conteudo"
          className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-brand-dark px-5 py-3 font-semibold text-brand-offwhite focus:not-sr-only"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
