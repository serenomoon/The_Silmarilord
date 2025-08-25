"use client"
import { useState, useEffect, useRef } from "react";
import { SiWikipedia } from "react-icons/si";
import { GiFamilyTree } from "react-icons/gi";
import { MdOutlineTextsms } from "react-icons/md";
import Image from "next/image";

export const AnimatedButton = ({ name, wiki, info, img, color_bg, h, w, zIndex, progenitor, descendant, couple, siblings, related }) => {
  const visibleName = name.replace(/_/g, "\u00A0");
  const [popup, setPopup] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const buttonRef = useRef(null);
  let leaveTimeout;

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Detectar clics fuera del botón
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        // Cerrar las opciones y popups si se hace clic fuera
        setShowOptions(false);
        setPopup(null);
        setIsHovering(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    // Cerrar el popup después de hacer clic en un elemento relacionado
    setPopup(null);
    setShowOptions(false);
  };

  const togglePopup = (type) => {
    if (isMobile && !showOptions) {
      // En móvil, primero mostrar opciones
      setShowOptions(true);
      return;
    }
    
    setPopup((prev) => (prev === type ? null : type));
    
    // En móvil, después de seleccionar una opción, ocultar las opciones
    if (isMobile) {
      setShowOptions(false);
    }
  };

  const handleMainButtonClick = () => {
    if (isMobile) {
      // Alternar visibilidad de opciones en móvil
      setShowOptions(prev => !prev);
      // Cerrar popup si estaba abierto
      // if (popup) {
      //   setPopup(null);
      // }
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(leaveTimeout);
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      leaveTimeout = setTimeout(() => {
        setIsHovering(false);
        setPopup(null);
      }, 150);
    }
  };

  const hei = h * 0.25;
  const wid = w * 0.25;

  return (
    <div
      className="relative flex flex-col items-center"
      style={{ zIndex: zIndex }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
    >
      <button
        className={`border-none rounded-[40px] cursor-pointer group relative`}
        style={{
          height: `${hei}vw`,
          width: `${wid}vw`
        }}
        onClick={handleMainButtonClick}
      >
        <span
          className={`z-10 capitalize inline-flex items-center justify-center ${color_bg} rounded-[25px] text-black leading-[60px] tracking-widest transition-all duration-500 group-hover:!w-0 group-hover:opacity-0
        ${visibleName.length > 17 ? "text-[.9vw]" : "text-[1.1vw]"}`}
          style={{
            height: `${hei}vw`,
            width: `${wid}vw`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            // Ocultar texto cuando se muestran opciones en móvil
            opacity: isMobile && showOptions ? 0 : 1,
            width: isMobile && showOptions ? 0 : `${wid}vw`
          }}
        >
          {visibleName}
        </span>

        {/* Opciones para desktop (hover) */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
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

          <a href={wiki} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <SiWikipedia className="text-yellow-500/80 bg-gray-900 rounded-4xl w-[3.2vw] h-[3.2vw] px-[.7vw]" />
          </a>
        </div>

        {/* Opciones para móvil (click) */}
        {isMobile && showOptions && (
          <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 gap-2">
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

            <a href={wiki} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <SiWikipedia className="text-yellow-500/80 bg-gray-900 rounded-4xl w-[3.2vw] h-[3.2vw] px-[.7vw]" />
            </a>
          </div>
        )}
      </button>

      {popup === "text" && (isHovering || isMobile) && (
        <div
          className="absolute top-full border-2 border-yellow-500/90 overflow-hidden translate-y-2 w-[22vw] h-[22vw] rounded-xl bg-gray-900 shadow-md"
          style={{ zIndex: zIndex + 1 }}
        >
          <div className="relative flex flex-col h-full font-sans text-yellow-500/60 bg-gray-900">
            <div className="p-2 overflow-y-auto scrollbar-custom">
              <h4 className="text-center font-ringm text-[1.5vw]">Summary</h4>
              <p className="text-sm text-[1.2vw]">{info}</p>
            </div>
          </div>
        </div>
      )}

      {popup === "image" && (isHovering || isMobile) && (
        <div
          className="absolute top-full scroll-auto border-2 border-yellow-500/90 translate-y-2 w-[22vw] h-[22vw] bg-gray-900 rounded-xl shadow-md overflow-hidden"
          style={{ zIndex: zIndex + 1 }}
        >
          <div className="relative flex flex-col h-full font-sans text-yellow-500/60 bg-gray-900 overflow-y-auto">
            <div className="p-[.5vw]">
              <h4 className="text-center font-ringm text-[1.5vw] sticky top-0 bg-gray-900 pb-[.5vw]">Related</h4>
              <div className="columns-2 gap-4 items-center text-[1.2vw]">
                {progenitor.length > 0 && (
                  <div className="break-inside-avoid pb-[1vw] text-center">
                    <span className="font-bold block">Progenitor/s</span>
                    <ul>
                      {progenitor.map((prog, i) => (
                        <li key={i}>
                          <button className="cursor-pointer" onClick={() => handleClick(prog)}>{prog}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {descendant.length > 0 && (
                  <div className="break-inside-avoid pb-[1vw] text-center">
                    <span className="font-bold block">Descendant</span>
                    <ul>
                      {descendant.map((prog, i) => (
                        <li key={i}>
                          <button className="cursor-pointer" onClick={() => handleClick(prog)}>{prog}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {couple.length > 0 && (
                  <div className="break-inside-avoid pb-[1vw] text-center">
                    <span className="font-bold block">Couple</span>
                    <ul>
                      {couple.map((prog, i) => (
                        <li key={i}>
                          <button className="cursor-pointer" onClick={() => handleClick(prog)}>{prog}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {siblings.length > 0 && (
                  <div className="break-inside-avoid pb-[1vw] text-center">
                    <span className="font-bold block">Siblings</span>
                    <ul>
                      {siblings.map((prog, i) => (
                        <li key={i}>
                          <button className="cursor-pointer" onClick={() => handleClick(prog)}>{prog}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {related.length > 0 && (
                  <div className="break-inside-avoid pb-[1vw] text-center">
                    <span className="font-bold block">Related</span>
                    <ul>
                      {related.map((prog, i) => (
                        <li key={i}>
                          <button className="cursor-pointer" onClick={() => handleClick(prog)}>{prog}</button>
                        </li>
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