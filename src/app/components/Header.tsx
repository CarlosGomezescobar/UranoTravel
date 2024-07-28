import Image from "next/image";
import thirdwebIcon from "../public/thirdweb.svg";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-20">
      <Image
        src={thirdwebIcon}
        alt="thirdweb logo"
        className="w-36 h-36 md:w-48 md:h-48"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-100 text-center">
        thirdweb SDK
        <span className="text-zinc-300 mx-2"> + </span>
        <span className="inline-block -skew-x-6 text-blue-500"> Next.js </span>
      </h1>
      <p className="text-zinc-300 text-base text-center">
        Read the{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-sm mx-1">
          README.md
        </code>{" "}
        file to get started.
      </p>
    </header>
  );
}
