import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

//antialiased manera de Tailwind de suavizar las fuentes

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
