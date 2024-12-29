"use client";
import { Geist } from "next/font/google";
import Image from "next/image";
import GithubIcon3 from "@/public/github3.svg";
import { useState } from "react";
import SidebarList from "./SidebarList";
import { useRouter } from "next/navigation";

const geist = Geist({
  subsets: ["latin"],
});

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        className="flex"
        onMouseEnter={() => {
          setSidebarVisible(!sidebarVisible);
        }}
        onMouseLeave={() => {
          setSidebarVisible(!sidebarVisible);
        }}
      >
        <div
          className={`bg-sidebarBG  transition-all ease-out duration-300  h-screen hover:w-[280px]  w-[70px] p-2 pt-6
            `}
        >
          <div
            className={`border-[#27272a] h-[65px] whitespace-nowrap overflow-hidden border-b-2 mb-5 transition-all duration-150 ease-in-out pb-2
            } `}
          >
            <div
              className={`flex  gap-4 pl-2  hover:bg-[#27272a] rounded-lg transition-all duration-200 ease-in-out pt-1 pb-1`}
            >
              <a
                href="https://github.com/notnaveen222"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div
                  className={`bg-[#0a0a0a] h-10 w-10 rounded-lg flex items-end cursor-pointer justify-center`}
                >
                  <Image
                    src={GithubIcon3}
                    alt="github icon"
                    height={35}
                    className="mt-2"
                  ></Image>
                </div>
              </a>

              <div
                className={`cursor-pointer ${
                  sidebarVisible ? "block" : "visible"
                }`}
                onClick={() => router.push("/")}
              >
                <div
                  className={`${geist.className} cursor-pointer font-bold text-xl`}
                >
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
          <div className="flex flex-col text-center">
            <SidebarList sidebarVisible={sidebarVisible} />
          </div>
        </div>

        {/* <div>
          <div
            className="cursor-pointer self-start m-2"
            onClick={() => {
              setSidebarVisible(!sidebarVisible);
            }}
          >
            <Image src={SidebarIcon} alt="sidebar icon" height={20}></Image>
          </div>
        </div> */}
      </div>
    </>
  );
}
