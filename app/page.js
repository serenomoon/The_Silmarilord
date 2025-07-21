"use client"
import { useState } from "react";
import Image from "next/image";
import Card from "./card/Card";
import data from "../lotr_info.json"
import {AnimatedButton} from "./ui/AnimatedButton";
import { Menu_Lota } from "./ui/Menu_Lota";
import { Banner } from "./ui/Banner";
import { RacesSection } from "./sections/RacesSection";
import { Foot } from "./ui/Foot";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }


  return (
    <div
      id="Home"
      // className="bg-[url(/img/lotrmap.jpg)]"
      className="w-full overflow-x-hidden"
    >

      <Menu_Lota 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        closeMenu={closeMenu}      
      />

      <div className="h-screen bg-[url(/img/map-back.png)] bg-fill bg-center">
        <div className="h-screen flex flex-col justify-center bg-black/50 items-center">
          <h1 className="text-7xl font-ringm text-yellow-500/90 text-shadow-lg/80">
            The Silmarilord
          </h1>
          <span className="text-md text-yellow-500/90 text-shadow-lg/80 font-ringm">A journey through Ëa</span>
        </div>
      </div>

      {/* WELCOME */}
      <div className="h-screen flex flex-col justify-center">
        <div className="h-[70vh] grid grid-cols-6">
          <div className="w-full h-full flex justify-center opacity-60">
            <Image
              src="/img/ui/khazad.png"
              alt="Banner"
              width={70}
              height={70}
              className="object-contain"
              style={{
                filter: "invert(77%) sepia(71%) saturate(3963%) hue-rotate(357deg) brightness(102%) contrast(103%)"
              }}
              />
            </div>

          <div className="h-full flex flex-col pt-20 px-10 text-center col-span-4 col-start-2 border-yellow-500/60 border-x-2">
            <h1 className="text-2xl font-ringm text-yellow-500/90">
                Welcome to the Silmarilord
            </h1>
            <p>
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <br></br>
            <p>
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
          </div>

          <div className="w-full h-full flex justify-center opacity-60">
            <Image
              src="/img/ui/ai-menu.png"
              alt="Banner"
              width={70}
              height={70}
              className="object-contain"
              style={{
                filter: "invert(77%) sepia(71%) saturate(3963%) hue-rotate(357deg) brightness(102%) contrast(103%)"
              }}
              />
          </div>
        </div>
      </div>

      <Banner />
      <div className="mb-[15vh]"></div>  


      <div className="w-screen relative flex flex-col items-center justify-center pt-20">
        {/* Imagen decorativa */}
        <div className="absolute -top-10 left-0 right-0 w-full z-0">
          <Image
            src="/img/ui/moria_door_top.png"
            alt="Banner"
            width={1920}
            height={0}
            className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(0,200,255,0.8)]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Texto encima de la imagen */}
        <div className="relative z-10 text-center w-2/3 mb-6 pb-5">
          <h1 className="text-5xl font-ringm text-yellow-500/90">Family Tree</h1>
          <span className="text-md text-yellow-500/90 font-ringm">Ask who and enter</span>
        </div>

        <div className="h-full flex flex-col pt-20 px-55 text-center col-span-4 col-start-2 border-yellow-500/60 border-x-2">
            <h1 className="text-2xl font-ringm text-yellow-500/90">
                Welcome to the Silmarilord
            </h1>
            <p className="px-30">
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <br></br>
            <p className="px-20">
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <p className="px-10">
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <br></br>
            <p className="px-5">
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <p className="px-0">
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
          </div>
      </div>

      <div className="mb-5">

      <RacesSection 
          data={data}
          index={0}
          h={16}
          w={60}
          order={"flex mb-5"}
          />

        <RacesSection 
          data={data}
          index={1}
          h={16}
          w={52}
          img_bg="valar.webp"
          />

      </div>

      <Foot />
     
    </div>
  );
}

export default Home
