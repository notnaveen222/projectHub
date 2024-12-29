import Image from "next/image";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import { SparklesCore } from "@/components/ui/sparkles";

const inter = Inter({
  subsets: ["latin"],
});
const geist = Geist({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className=" rounded-3xl bg-black  text-7xl h-full w-full flex flex-col justify-center items-center">
        <div>Welcome to my</div>
        <div className="font-bold">PROJECT HUB</div>
      </div>
    </>
  );
}
