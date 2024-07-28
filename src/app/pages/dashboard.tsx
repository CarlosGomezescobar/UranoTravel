"use client";

import { ThirdwebProvider } from "thirdweb/react";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <ThirdwebProvider>
      <main className="p-4 pb-10 min-h-screen flex items-center justify-center container max-w-screen-lg mx-auto bg-gray-900 text-white">
        <div className="py-20 w-full">
          <Header />
          <div className="flex justify-center mb-20">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
          {/* Aquí puedes añadir más componentes o funcionalidad específica del dashboard */}
        </div>
      </main>
    </ThirdwebProvider>
  );
}
