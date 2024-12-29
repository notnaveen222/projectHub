"use client";
import { ChangeEvent, useState } from "react";

export default function () {
  const [url, setUrl] = useState("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  return (
    <>
      <div className=" rounded-3xl  bg-black  text-3xl h-full w-full flex flex-col justify-start items-start p-5">
        <div className="flex justify-between items-center w-full mb-10">
          <div>QR Code Generator</div>
          <div className="flex text-lg gap-10">
            <div className="cursor-pointer">Github</div>
            <div className="cursor-pointer">Extension</div>
          </div>
        </div>
        <div className="flex gap-4">
          <input
            className="bg-transparent focus:ring-0 border-[#27272a] border-2 rounded-lg text-base px-2 py-1 h-11 w-[300px] focus:outline-none focus:border-white"
            placeholder="Enter url"
            onChange={handleInput}
            type="text"
          />
          <button className="text-base border-[#27272a] hover:border-white hover:border-2 transition-all duration-100 ease-in-out border-2 rounded-lg py-1 px-2">
            Generate
          </button>
        </div>
        <div>Loading</div>
      </div>
    </>
  );
}
