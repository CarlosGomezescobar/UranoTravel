"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThirdwebProvider, useAddress } from "@thirdweb-dev/react";
import { ConnectButton } from "thirdweb/react";

import Header from "../app/components/Header";
import ThirdwebResources from "../app/components/ThirdwebResources";
import { client } from "./client";

function WrappedHomePage() {
  return (
    <ThirdwebProvider>
      <HomePage />
    </ThirdwebProvider>
  );
}

function HomePage() {
  const router = useRouter();
  const address = useAddress();

  useEffect(() => {
    if (address) {
      // Si la wallet está conectada, redirigir al dashboard
      router.push("/dashboard");
    }
  }, [address, router]);

  return (
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
  );
}

export default WrappedHomePage;