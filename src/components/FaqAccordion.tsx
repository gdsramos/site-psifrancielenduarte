"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="divide-y divide-brand-beige border-y border-brand-beige">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <h3>
              <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-bold text-brand-dark">
                {faq.question}
                <ChevronDown className={`size-5 shrink-0 text-brand-terracotta transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            </h3>
            {isOpen && <p className="max-w-2xl pb-6 leading-7 text-brand-dark/75">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
