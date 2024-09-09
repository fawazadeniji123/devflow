import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A stackoverflow clone for developers. Ask questions, get answers, and share your knowledge. Built with Next.js, Prisma, and PostgreSQL.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
