import Image from "next/image";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
const geist = Geist({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div>Home </div>
    </>
  );
}
