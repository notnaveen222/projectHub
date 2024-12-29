import ProjectTile from "./ProjectTile";
import GistIcon from "@/public/gist.svg";
import QRCodeIcon from "@/public/qr-code1.svg";
import URLIcon from "@/public/url.svg";
import { url } from "inspector";
import Image from "next/image";

interface sidebarListProps {
  sidebarVisible: boolean;
}

export default function SidebarList({ sidebarVisible }: sidebarListProps) {
  return (
    <>
      <div>
        <ProjectTile
          projectIcon={GistIcon}
          projectTitle="Gist Gen"
          sidebarVisible={sidebarVisible}
          routeTo="/gistgen"
        />
        <ProjectTile
          projectIcon={QRCodeIcon}
          projectTitle="QRC Gen"
          sidebarVisible={sidebarVisible}
          routeTo="/qrcgen"
        />
        <ProjectTile
          projectIcon={URLIcon}
          projectTitle="URL Shortner"
          sidebarVisible={sidebarVisible}
          routeTo="/linkr"
        />
      </div>
      {/* <div>
        <ProjectTile
          projectIcon={GistIcon}
          projectTitle="Gist Gen"
          sidebarVisible={sidebarVisible}
        />
      </div> */}
    </>
  );
}
