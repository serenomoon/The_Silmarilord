"use client"
import { useState } from "react";
import { SiWikipedia } from "react-icons/si";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineTextsms } from "react-icons/md";
import Image from "next/image";

export const AnimatedButton = ({ id, name, wiki, info, img, color_bg, h, w }) => {
  const visibleName = name.replace(/_/g, "\u00A0");
  const [popup, setPopup] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  let leaveTimeout;

  const togglePopup = (type) => {
    setPopup((prev) => (prev === type ? null : type));
  };

  return (
    <div 
      id={id}
      className="relative flex flex-col items-center"
      onMouseEnter={() => {
        clearTimeout(leaveTimeout);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        leaveTimeout = setTimeout(() => {
          setIsHovering(false);
          setPopup(null);
        }, 150); // <- margen de tiempo para evitar cierres inmediatos
      }}
    >
      <button
        className={`h-${h} w-${w} border-none rounded-[40px] cursor-pointer group relative`}
      >
        <span className={`z-10 capitalize inline-block ${color_bg} h-${h} w-${w} rounded-[25px] text-black leading-[60px] text-lg tracking-widest transition-all duration-500 group-hover:w-0 group-hover:opacity-0`}>
          {visibleName}
        </span>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
          <div className="relative">
            <MdOutlineTextsms
              className="text-white w-[45px] h-[45px] px-2.5 cursor-pointer"
              onClick={() => togglePopup("text")}
            />
          </div>

          <div className="relative">
            <CiImageOn
              className="text-white w-[45px] h-[45px] px-2.5 cursor-pointer"
              onClick={() => togglePopup("image")}
            />
          </div>

          <a href={wiki} target="_blank" rel="noopener noreferrer">
            <SiWikipedia className="text-white w-[45px] h-[45px] px-2.5" />
          </a>
        </div>
      </button>

      {popup === "text" && isHovering && (
        <div 
          className="absolute top-full translate-y-2 w-[300px] h-[300px] bg-white text-black rounded-xl shadow-md overflow-auto z-50"
        >
          <div className="relative flex flex-col h-full">
            <div className="relative h-2/3 w-full">
              <Image
                src={img}
                alt="Imagen descriptiva"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="h-1/2 p-2">
              <p className="text-sm">{info}</p>
            </div>
          </div>
        </div>
      )}

      {popup === "image" && isHovering && (
        <div 
          className="absolute top-full translate-y-2 w-[250px] h-[200px] bg-white p-0.5 rounded-xl shadow-md overflow-hidden z-50"
        >
          <Image
            src={img}
            alt="Imagen descriptiva"
            fill
            className="object-cover object-top rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
