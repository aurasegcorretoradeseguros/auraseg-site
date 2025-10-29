'use client';
import Script from 'next/script';
import {
  ShieldCheck, PhoneCall, ArrowRight, CheckCircle2, MessageCircle, Mail,
  HeartPulse, BriefcaseBusiness, Users, Trophy, Clock, Lock, MapPin, Plane
} from 'lucide-react';

export default function Page() {
  const recaptchaSiteKey = '6LdOUforAAAAAOZBNR5K1bJ4Ttsa2iicxNVxSX2G';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Carrega o reCAPTCHA */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      {/* Seu conteúdo JSX existente vem aqui, incluindo o formulário */}
    </div>
  );
}

