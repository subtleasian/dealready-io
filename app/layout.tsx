import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DealReady.io — Banker-quality prep in a weekend',
  description: 'TurboTax for selling your company. Generate a CIM, valuation benchmark, and readiness checklist for lower-middle-market founders.',
  openGraph: {
    title: 'DealReady.io — Banker-quality prep in a weekend',
    description: 'Banker-quality prep without banker fees.',
    images: [{ url: '/assets/og-image.svg' }]
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
