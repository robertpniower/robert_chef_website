// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My Home Dashboard',
  description: 'IoT telemetry and home automation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 font-sans antialiased text-stone-900">
        {children}
      </body>
    </html>
  );
}
