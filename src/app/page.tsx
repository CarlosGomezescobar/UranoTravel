"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ConnectButton, ThirdwebProvider } from "thirdweb/react";
import { useAddress } from "@thirdweb-dev/react";

import Header from "../app/components/Header";
import ThirdwebResources from "../app/components/ThirdwebResources";
import { client } from "./client";

export default function Home() {
  const router = useRouter();
  const address = useAddress();

  useEffect(() => {
    if (address) {
      // Si la wallet está conectada, redirigir al dashboard
      router.push("/dashboard");
    }
  }, [address, router]);

  return (
    <ThirdwebProvider>
      <main className="p-4 pb-10 min-h-screen flex items-center justify-center container max-w-screen-lg mx-auto bg-gray-900 text-white">
        <div className="py-20 w-full">
          <Header />
          <div className="flex justify-center mb-20">
            <ConnectButton
              client={client}
              appMetadata={{
                name: "Urano Travel",
                url: "https://example.com",
              }}
            />
          </div>
          <ThirdwebResources />
        </div>
      </main>
    </ThirdwebProvider>
  );
}
