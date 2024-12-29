import { div } from "framer-motion/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface projectTIleProps {
  projectIcon: string;
  projectTitle: string;
  sidebarVisible: boolean;
  routeTo: string;
}

export default function ProjectTile({
  projectIcon,
  projectTitle,
  sidebarVisible,
  routeTo,
}: projectTIleProps) {
  const router = useRouter();
  return (
    <div
      className={`flex gap-6  py-2 rounded-lg items-center transition-all pl-[16px] duration-100 whitespace-nowrap  hover:bg-[#27272a] cursor-pointer `}
      onClick={() => router.push(routeTo)}
    >
      <Image
        src={projectIcon}
        alt="Project Tile Icon"
        height={25}
        width={22}
      ></Image>
      <div className={` text-lg  ${sidebarVisible ? "block " : "visible "}`}>
        {projectTitle}
      </div>
    </div>
  );
}
