"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917899738550";
const PREFILLED_MESSAGE = encodeURIComponent("Hi, I'd like to enquire about rooms at The AVA.");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#22c35e] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
