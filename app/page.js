"use client"
import { useState } from "react";
import Image from "next/image";
import Card from "./card/Card";
import data from "../lotr_info.json"
import { AnimatedButton } from "./ui/AnimatedButton";
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


      <div className="w-screen relative flex flex-col items-center justify-center">
        {/* Imagen decorativa */}
        <div className="relative w-full h-[46.5vw] flex justify-center">
          { /* Imagen decorativa como fondo */}
          <div className="absolute inset-0 w-full h-full z-10">
            <Image
              src="/img/ui/moria_door_top.png"
              alt="Banner"
              fill
              className="object-contain w-full h-full"
              style={{ 
                filter: "brightness(0) invert(1) drop-shadow(0 0 15px rgba(100, 200, 255, 0.8))",
                mixBlendMode: "screen",
                opacity: "0.9"
              }}
            />
          </div>

          {/* Texto fijo sobre la imagen */}
          <div className="absolute z-20 text-center">
            <h1 className="text-[4vw] font-ringm text-yellow-500/90 pt-[6.5vw] pb-0 mb-0">Family Tree</h1>
            <p className="text-[1.5vw] text-yellow-500/90 font-ringm p-0 m-0">Ask who and enter</p>
          </div>

          <div className=" absolute top-[15vw] flex flex-col pt-[6vw] px-[15vw] text-center col-span-4 col-start-2">
            <h1 className="text-[1.7vw] font-ringm text-yellow-500/90">
              Welcome to the Silmarilord
            </h1>
            <p className="px-[16vw] text-[1.2vw] pt-0 mt-0">
              1Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <p className="px-[8vw] text-[1.2vw] pt-0 mt-0 pb-[2vw]">
              2Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <p className="px-[6vw] text-[1.2vw] pt-0 mt-0">
              3Cupidatat proident anim anim anim anim anim anim anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <p className="px-[4.5vw] text-[1.2vw] pt-0 mt-0 pb-[2vw]">
              4Cupidatat proident anim anim anim anim anim anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem..
              Cupidatat proident anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem..
            </p>
            <p className="px-[2vw] text-[1.2vw] pt-0 mt-0">
              5Cupidatat proident anim anim anim anim anim anim anim anim anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
            <p className="px-0 text-[1.2vw] pt-0 mt-0">
              6Cupidatat proident anim anim anim anim anim anim anim anim reprehenderit ipsum sunt ea mollit veniam in aliquip mollit Lorem.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">

        <div className="absolute -top-[1.9vw] -left-[3vw] w-[23vw] z-10 rounded-[3rem]">
          <Image
            src="/img/ui/moria_door_left.png"
            alt="Banner"
            width={500}
            height={0}
            className="w-full h-auto"
            style={{ 
              filter: "drop-shadow(0 0 10px rgba(100, 200, 255, 0.9))",
            }}
          />
        </div>

        <div className="absolute -top-[1.8vw] -right-[4vw] w-[23vw] z-10 rounded-[4rem]">
          <Image
            src="/img/ui/moria_door_right.png"
            alt="Banner"
            width={500}
            height={0}
            className="object-contain w-full h-full"
            style={{ 
              filter: "drop-shadow(0 0 10px rgba(100, 200, 255, 0.9))",
            }}
          />
        </div>

        <RacesSection
          data={data}
          index={0}
          h={16}
          w={80}
          order={"flex mb-5"}
        />

        <RacesSection
          data={data}
          index={1}
          h={16}
          w={60}
          img_bg="valar.webp"
        />

        <div className="absolute bottom-0 -left-[.8vw] w-[18vw]">
          <Image
            src="/img/ui/moria_door_bottom_left.png"
            alt="Banner"
            width={500}
            height={0}
            className="w-full h-auto"
            style={{ 
              filter: "drop-shadow(0 0 10px rgba(100, 200, 255, 0.9))",
            }}
          />
        </div>

        <div className="absolute bottom-0 -right-[3.2vw] w-[19vw]">
          <Image
            src="/img/ui/moria_door_bottom_right.png"
            alt="Banner"
            width={500}
            height={0}
            className="w-full h-auto"
            style={{ 
              filter: "drop-shadow(0 0 10px rgba(100, 200, 255, 0.9))",
            }}
          />
        </div>
      </div>


      <div className="relative w-[100vw] left-1/2 -translate-x-1/2">
        <Image
          src="/img/ui/moria_door_bottom.png"
          alt="Banner"
          width={1920}
          height={0}
          className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(0,200,255,0.8)]"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>


      <div className="mb-50"></div>
      <Foot />

    </div>
  );
}

export default Home
