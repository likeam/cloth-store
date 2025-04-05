import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";

const roboto = Roboto({
  weight: ["300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloth Store",
  description: "Cloth Website ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
