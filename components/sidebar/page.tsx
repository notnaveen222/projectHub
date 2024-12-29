"use client";
import { Geist } from "next/font/google";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/public/githubicon.svg";
import GithubIcon3 from "@/public/github3.svg";
import SidebarIcon from "@/public/sidebar.svg";
import { useState } from "react";

const geist = Geist({
  subsets: ["latin"],
});

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <>
      <div className="flex">
        <div
          className={`bg-sidebarBG  transition-all ease-out duration-200  h-screen  
            ${sidebarVisible ? "w-[280px] p-5 pt-8" : "w-[70px] p-2 pt-4"}
            `}
        >
          <div
            className={`border-[#27272a] border-b-2 transition-all duration-150 ease-in-out ${
              sidebarVisible ? "pb-5" : "pb-2"
            } `}
          >
            <div
              className={`flex gap-4 pl-2  hover:bg-[#27272a] rounded-lg transition-all duration-200 ease-in-out pt-1 pb-1`}
            >
              <a
                href="https://github.com/notnaveen222"
                target="_blank"
                rel="noopener noreferrer"
                className={sidebarVisible ? "" : "pb-1 "}
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

              <div className={`${sidebarVisible ? "block" : "hidden"}`}>
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
