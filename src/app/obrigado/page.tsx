'use client';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800 p-6">
      <div className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-lg text-center">
        <h1 className="text-3xl font-extrabold text-[#1C3D5A]">
          Mensagem enviada com sucesso! ✅
        </h1>
        <p className="mt-4 text-slate-600">
          Obrigado por entrar em contato com a <strong>AuraSeg Corretora de Seguros</strong>.<br />
          Nossa equipe vai te responder o mais rápido possível.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <a
            href="https://wa.me/5511912302872?text=Ol%C3%A1,%20enviei%20uma%20mensagem%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20consultor."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-[#1C3D5A] text-white font-medium hover:opacity-90 shadow-md"
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 border border-[#1C3D5A] text-[#1C3D5A] font-medium hover:bg-[#1C3D5A]/5"
          >
            Voltar ao site <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
