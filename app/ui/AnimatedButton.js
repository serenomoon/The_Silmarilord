"use client"
import { useState } from "react";
import { SiWikipedia } from "react-icons/si";
import { GiFamilyTree } from "react-icons/gi";
import { MdOutlineTextsms } from "react-icons/md";
import Image from "next/image";

export const AnimatedButton = ({ id, name, wiki, info, img, color_bg, h, w, zIndex, progenitor ,descendant ,couple ,siblings ,related }) => {
  const visibleName = name.replace(/_/g, "\u00A0");
  const [popup, setPopup] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  let leaveTimeout;

  const togglePopup = (type) => {
    setPopup((prev) => (prev === type ? null : type));
  };
  
  const hei = h*0.25
  const wid = w*0.25

  return (
    <div 
      id={id}
      className="relative flex flex-col items-center"
      style={{zIndex:zIndex}}
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
        className={`border-none rounded-[40px] cursor-pointer group relative`}
        style={{
          height: `${hei}vw`,
          width: `${wid}vw`
        }}
      >
        <span className={`z-10 capitalize inline-flex items-center justify-center ${color_bg} rounded-[25px] text-black leading-[60px] text-[1.1vw] tracking-widest transition-all duration-500 group-hover:!w-0 group-hover:opacity-0`}
          style={{
            height: `${hei}vw`,
            width: `${wid}vw`,
            display: 'inline-flex', // Cambiado a flex para mejor control
            alignItems: 'center', // Centrado vertical
            justifyContent: 'center', // Centrado horizontal
            textAlign: 'center' // Redundante pero segura
          }}
        >
          {visibleName}
        </span>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
          <div className="relative">
            <MdOutlineTextsms
              className="text-yellow-500/80 bg-gray-900 rounded-4xl w-[3.2vw] h-[3.2vw] px-[.7vw] cursor-pointer"
              onClick={() => togglePopup("text")}
            />
          </div>

          <div className="relative">
            <GiFamilyTree
              className="text-yellow-500/80 bg-gray-900 rounded-4xl w-[3.2vw] h-[3.2vw] px-[.7vw] cursor-pointer"
              onClick={() => togglePopup("image")}
            />
          </div>

          <a href={wiki} target="_blank" rel="noopener noreferrer">
            <SiWikipedia className="text-yellow-500/80 bg-gray-900 rounded-4xl w-[3.2vw] h-[3.2vw] px-[.7vw]" />
          </a>
        </div>
      </button>

      {popup === "text" && isHovering && (
        <div 
          className="absolute top-full border-2 border-yellow-500/90 overflow-hidden translate-y-2 w-[22vw] h-[22vw] rounded-xl bg-gray-900 shadow-md"
          style={{zIndex:zIndex}}
        >
          <div className="relative flex flex-col h-full font-sans text-yellow-500/60 bg-gray-900">
            <div className="p-2 overflow-y-auto scrollbar-custom">
              <h4 className="text-center font-ringm text-[1.5vw]">Summary</h4>
              <p className="text-sm text-[1.2vw]">{info}</p>
            </div>
          </div>
        </div>
      )}

      {popup === "image" && isHovering && (
        <div 
  className="absolute top-full scroll-auto border-2 border-yellow-500/90 translate-y-2 w-[22vw] h-[22vw] bg-gray-900 rounded-xl shadow-md overflow-hidden"
  style={{zIndex: zIndex}}
>
  <div className="relative flex flex-col h-full font-sans text-yellow-500/60 bg-gray-900 overflow-y-auto">
    <div className="p-[.5vw]">
      <h4 className="text-center font-ringm text-[1.5vw] sticky top-0 bg-gray-900 pb-[.5vw]">Related</h4>
      <div className="columns-2 gap-4 items-center text-[1.2vw]">
        {/* Lista 1 */}
        {progenitor.length > 0 && (
          <div className="break-inside-avoid pb-[1vw] text-center">
            <span className="font-bold block">Progenitor/s</span>
            <ul>
              {progenitor.map((prog, i) => (
                <li key={i}>{prog}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Lista 2 */}
        {descendant.length > 0 && (
          <div className="break-inside-avoid pb-[1vw] text-center">
            <span className="font-bold block">Descendant</span>
            <ul>
              {descendant.map((prog, i) => (
                <li key={i}>{prog}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Lista 3 */}
        {couple.length > 0 && (
          <div className="break-inside-avoid pb-[1vw] text-center">
            <span className="font-bold block">Couple</span>
            <ul>
              {couple.map((prog, i) => (
                <li key={i}>{prog}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Lista 4 */}
        {siblings.length > 0 && (
          <div className="break-inside-avoid pb-[1vw] text-center">
            <span className="font-bold block">Siblings</span>
            <ul>
              {siblings.map((prog, i) => (
                <li key={i}>{prog}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Lista 5 */}
        {related.length > 0 && (
          <div className="break-inside-avoid pb-[1vw] text-center">
            <span className="font-bold block">Related</span>
            <ul>
              {related.map((prog, i) => (
                <li key={i}>{prog}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
      )}
    </div>
  );
};
