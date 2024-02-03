import { Nunito } from 'next/font/google';
import "./globals.css";

const nunito = Nunito({
  subsets: ['latin']
});

export const metadata = {
  title: "ahmet kantar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
