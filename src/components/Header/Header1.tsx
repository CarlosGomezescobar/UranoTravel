"use client"


import { CiMenuFries } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import Link from "next/link"
import { Navbar } from "../Navbar"
import { useState } from "react"
import { ConnectButton, ThirdwebProvider } from "thirdweb/react";
import { client } from "../../../client"

export function Header1() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)


    return (
        <div className="container mx-auto my-5">
           <div className="flex items-center justify-between px-5 md:px-0">
            <Link href="/">
            <h1 className="font-extrabold">Urano Travel</h1>
            </Link>
            <CiMenuFries className="block text-2xl md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
              

            <Navbar openMobileMenu={openMobileMenu} />

            <div className="flex items-center gap-2 md:gap-5">
             <Link href="tel:+589985452" className="flex items-center gap-4 cursor-pointer">
             <BsTelephone />
             <span className="hidden md:block">+34 847759634</span>
             </Link>
             <ThirdwebProvider>
             <ConnectButton
              client={client}
              appMetadata={{
                name: "Urano Travel",
                url: "https://example.com",
              }}
            />
             </ThirdwebProvider>
            </div>
           </div>

        </div>
    )
}