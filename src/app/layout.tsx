// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import AppContent from '@/components/layout/AppContent'; // Importar o novo componente
import { Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';

// Configuração da fonte com next/font para otimização
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto', // Opcional: para uso com variáveis CSS
});

// Agora podemos definir os metadados corretamente em um Server Component
export const metadata: Metadata = {
  title: 'Tagis Medicina e Diagnóstico - São José - SC | Consultas e Exames',
  description: 'Consultas e Exames em um Só Lugar! +30 Especialidades | +50 Tipos de Exames | +20 Convênios. Agende fácil pelo WhatsApp. Fones: (48) 3035-3377 / (48) 99193-6045.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn('scroll-smooth', roboto.variable)}>
      <head>
        {/* Adiciona a referência explícita ao favicon para builds estáticos */}
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>
      {/* O novo AppContent envolve os filhos, cuidando da lógica do lado do cliente */}
      <AppContent>{children}</AppContent>
    </html>
  );
}
