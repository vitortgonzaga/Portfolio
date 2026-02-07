import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";
import { clashDisplay } from "./utils/fonts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Meu Portfólio",
  icons: {
    icon: "/images/v.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plexMono.variable} ${clashDisplay.variable} antialiased`}>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
