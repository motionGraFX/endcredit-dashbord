import './globals.css';

export const metadata = {
  title: 'Endcrawl Dashboard',
  description: 'Dashboard UI for credits',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
