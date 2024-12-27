import { Geist } from "next/font/google";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/public/githubicon.svg";

const geist = Geist({
  subsets: ["latin"],
});

export default function Sidebar() {
  return (
    <div className="bg-sidebarBG w-[280px] h-screen p-5 pt-10 ">
      <div className="border-[#27272a] border-b-2 pb-5">
        <div className="flex gap-4 items-center pl-2  hover:bg-[#27272a] rounded-lg transition-all duration-200 ease-in-out">
          <a
            href="https://github.com/notnaveen222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#1d4ed8] h-10 w-10 rounded-lg flex items-end cursor-pointer justify-center">
              <Image src={GithubIcon} alt="github icon" height={35}></Image>
            </div>
          </a>

          <div>
            <div className={`${geist.className} font-bold text-3xl`}>
              Naveen
            </div>
            <div
              className={`${geist.className} font-bold text-sm text-[#A2A2A4]`}
            >
              Project Hub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
