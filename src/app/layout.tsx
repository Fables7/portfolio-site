import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabien Lestrat Portfolio",
  description: "Fabien Lestrat's portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}, ${spaceGrotesk.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
