import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'nexarfluX | Full-Stack Developer',
  description: 'Professional portfolio showcasing expertise in web development, mobile apps, and enterprise solutions.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'React Native'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
