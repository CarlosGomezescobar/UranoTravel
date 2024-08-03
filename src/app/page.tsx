"use client";


import { ConnectButton, ThirdwebProvider } from "thirdweb/react";



import ThirdwebResources from "../components/ThirdwebResources";
import { client } from "../../client";

import { Header1 } from "@/components/Header/Header1";
import { Banner } from "@/components/Banner";
import { FloatedSearch } from "@/components/FloatedSearch";
import { TransitionPage } from "@/components/TransitionPage.tsx/TransitionPage";


export default function Home() {
  

  return (
    <ThirdwebProvider>
      <TransitionPage />
       <Header1 />
      <main className="">
        <div className="">
        <Banner />
        <FloatedSearch />
        
        </div>
      </main>
    </ThirdwebProvider>
  );
}