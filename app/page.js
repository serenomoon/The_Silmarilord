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
      className="w-full"
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

      <Banner />

      {/* WELCOME */}
      <div className="h-screen grid grid-cols-6">
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

        <div className="h-screen flex flex-col pt-20 text-center col-span-4 col-start-2">
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
        w={60}
        img_bg="valar.webp"
      />

      <Banner />

      <Foot />
     
    </div>
  );
}

export default Home
