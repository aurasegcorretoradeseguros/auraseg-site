'use client';
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AuraSeg Corretora de Seguros',
  description: 'Cote saúde, vida, viagem e empresarial. Atendimento humano e rápido.',
  metadataBase: new URL('https://www.aurasegcorretora.com.br'),
  openGraph: {
    title: 'AuraSeg Corretora de Seguros',
    description: 'Cote saúde, vida, viagem e empresarial. Atendimento humano e rápido.',
    url: 'https://www.aurasegcorretora.com.br',
    siteName: 'AuraSeg',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Script src="https://www.google.com/recaptcha/api.js" async defer />
        {children}
      </body>
    </html>
  );
}
