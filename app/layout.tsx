import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const solway = localFont({
  src: [
    {
      path: './fonts/Solway-Light.ttf',
      weight: '300',
    },
    {
      path: './fonts/Solway-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/Solway-Medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/Solway-Bold.ttf',
      weight: '700',
    },
  ],
	display: 'swap',
});

export const metadata: Metadata = {
  title: 'PAFinance',
  description: 'Catatan keuangan keluarga Prayoga Febriandika',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id'>
      <body className={`${solway.className} antialiased`}>{children}</body>
    </html>
  );
}
