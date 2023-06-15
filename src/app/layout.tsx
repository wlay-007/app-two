import { Metadata } from "next";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import "./globals.css";
// import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" flex min-h-screen flex-col">
        <TheHeader />
        <main className="align-center flex flex-1 items-center justify-center ">
          {children}
        </main>
        <TheFooter />
      </body>
    </html>
  );
}
