"use client"
import { useState } from "react";
import Image from "next/image";
import Card from "./card/Card";
import data from "../lotr_info.json"
import {AnimatedButton} from "./ui/AnimatedButton";
import { Menu_Lota } from "./ui/Menu_Lota";

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
      // className="bg-[url(/img/lotrmap.jpg)]"
      className="w-full"
    >

      <Menu_Lota 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        closeMenu={closeMenu}      
      />

      <div className="h-screen bg-[url(/img/map-back.png)] bg-fill bg-center">
        <div className="h-screen flex justify-center bg-black/50 items-center">
          <h1 className="text-7xl font-ringm text-yellow-500/90 text-shadow-lg/80">
            Lord Of The Ancestors
          </h1>
        </div>
      </div>


      <div className="grid justify-center mb-5">
        {data.lotr_info[0].map((lotr,i) => {
          return(
          <AnimatedButton
              key={i}
              name={lotr.nombre} 
              wiki={lotr.link}
              info={lotr.info}
              img={lotr.img}
              color_bg={lotr.color_bg}
              h={16}
              w={60}
            />
          )
        })}
      </div>

      <div className="grid grid-cols-5 justify-center gap-y-5">
        {data.lotr_info[1].map((lotr,i) => {
          return(
          <AnimatedButton
              key={i}
              name={lotr.nombre} 
              wiki={lotr.link}
              info={lotr.info}
              img={lotr.img}
              color_bg={lotr.color_bg}
              h={16}
              w={60}
            />
          )
        })}
      </div>  
     
    </div>
  );
}

export default Home
