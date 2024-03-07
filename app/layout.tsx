import type { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "../fonts";
import s from "./page.module.css";
import Header from "@/components/global/header/header";

export const metadata: Metadata = {
  title: "Star Wars Persons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={fonts.rubik.className + ' ' + s.body}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
