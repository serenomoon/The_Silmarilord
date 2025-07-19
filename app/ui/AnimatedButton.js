"use client"
import { useState } from "react";
import { SiWikipedia } from "react-icons/si";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineTextsms } from "react-icons/md";
import Image from "next/image";

export const AnimatedButton = ({ name, wiki, info, img, color_bg, h, w }) => {
  const visibleName = name.replace(/_/g, "\u00A0");
  const [popup, setPopup] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const togglePopup = (type) => {
    setPopup((prev) => (prev === type ? null : type));
  };

  return (
    <div 
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setPopup(null);
      }}
    >
      <button
        className={`h-${h} w-${w} border-none rounded-[40px] bg-yellow-600 cursor-pointer group relative`}
      >
        <span className={`z-10 capitalize inline-block ${color_bg} h-16 w-60 rounded-[25px] text-black leading-[60px] text-lg tracking-widest transition-all duration-500 group-hover:w-0 group-hover:opacity-0`}>
          {visibleName}
        </span>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
          {/* Texto icon con popup */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
          >
            <MdOutlineTextsms
              className="text-white w-[45px] h-[45px] px-2.5 cursor-pointer"
              onClick={() => togglePopup("text")}
            />
          </div>

          {/* Imagen icon con popup */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
          >
            <CiImageOn
              className="text-white w-[45px] h-[45px] px-2.5 cursor-pointer"
              onClick={() => togglePopup("image")}
            />
          </div>

          {/* Wikipedia link */}
          <a href={wiki} target="_blank" rel="noopener noreferrer">
            <SiWikipedia className="text-white w-[45px] h-[45px] px-2.5" />
          </a>
        </div>
      </button>

      {/* Contenedores popup */}
      {popup === "text" && isHovering && (
        <div 
          className="absolute top-full mt-2 w-[250px] h-[200px] bg-white text-black p-3 rounded-xl shadow-md overflow-auto z-50"
          onMouseLeave={() => setPopup(null)}
        >
          <p className="text-sm">{info}</p>
        </div>
      )}

      {popup === "image" && isHovering && (
        <div 
          className="absolute top-full mt-2 w-[250px] h-[200px] bg-white p-0.5 rounded-xl shadow-md overflow-hidden z-50"
          onMouseLeave={() => setPopup(null)}
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