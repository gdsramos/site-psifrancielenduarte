"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { profile } from "@/lib/site-data";

export function FloatingWhatsapp() {
  return (
    <motion.a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp com Francielen Duarte" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.65 }} className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-brand-terracotta px-4 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(113,55,29,0.35)] transition hover:scale-105 hover:bg-brand-rose-burnt focus-visible:scale-105 sm:bottom-7 sm:right-7 sm:px-5">
      <MessageCircle className="size-5 fill-current" aria-hidden="true" />
      <span className="hidden text-sm sm:inline">Fale comigo</span>
    </motion.a>
  );
}
