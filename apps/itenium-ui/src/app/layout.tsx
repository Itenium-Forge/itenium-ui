import './global.css';

export const metadata = {
  title: 'Itenium UI',
  description: 'The @itenium/ui DemoApp',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
