import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aurasegcorretora.com.br'),
  title: {
    default: 'AuraSeg Corretora de Seguros',
    template: '%s · AuraSeg',
  },
  description:
    'Cote saúde, vida, viagem e empresarial. Atendimento humano, rápido e sem burocracia.',
  openGraph: {
    type: 'website',
    url: 'https://www.aurasegcorretora.com.br',
    siteName: 'AuraSeg Corretora de Seguros',
    title: 'AuraSeg Corretora de Seguros',
    description:
      'Cote saúde, vida, viagem e empresarial. Atendimento humano e rápido.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraSeg Corretora de Seguros',
    description:
      'Cote saúde, vida, viagem e empresarial. Atendimento humano e rápido.',
  },
  alternates: {
    canonical: 'https://www.aurasegcorretora.com.br',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
