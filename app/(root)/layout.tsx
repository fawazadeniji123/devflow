import Navbar from "@/components/shared/navbar/navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        left sidebar
        <section className="flex min-h-screen flex-1 flex-col p-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        right sidebar
      </div>
      Toaster
    </main>
  );
}
