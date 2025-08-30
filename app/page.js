"use client"
import { useState } from "react";
import Image from "next/image";
import data from "../lotr_info.json"
import { Menu_Lota } from "./ui/Menu_Lota";
import { Banner } from "./ui/Banner";
import { Foot } from "./ui/Foot";
import { RacesContainer } from "./sections/RacesContainer";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div
      id="Home"
      className="w-full overflow-x-hidden"
    >

      <Menu_Lota
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />

      <div className="h-screen bg-[url(/img/map-back.png)] bg-fill bg-center">
        <div className="h-screen flex flex-col justify-center bg-black/50 items-center">
          <h1 className="sm:text-7xl text-5xl text-center font-ringm text-yellow-500/90 text-shadow-lg/80">
            The Silmarilord
          </h1>
          <span className="text-md text-yellow-500/90 text-shadow-lg/80 font-ringm">A journey through Ëa</span>
        </div>
      </div>

      {/* WELCOME */}
      <div className="sm:h-screen flex flex-col justify-center my-4 sm:my-0">
        <div className="sm:h-[70vh] grid grid-cols-6">
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

          <div className="h-full flex flex-col pt-20 sm:px-10 px-2 text-center col-span-4 col-start-2 border-yellow-500/60 border-x-2">
            <h1 className="pb-4 sm:pb-0 text-2xl font-ringm text-yellow-500/90">
              Welcome to the Silmarilord
            </h1>
            {/* <p>
              Esta es una pagina hecha por un fan para fans. En el mundo creado por JRR Tolkien podemos encontrar muchisimos personajes con (la mayoria) una historia propia y rica en detalles.
Asi como cada personaje tiene su historia, en esta tambien tiene su desendencia y sus ancestros. Siendo el objetivo de esta web (y aun en progreso) listar cada uno de sus personajes y sus interacciones para facilitar, de alguna manera y de una forma resumida, el trabajo de investigacion a la hora de aprender de sus arboles familiares.
Disfruta tu viaje!
            </p> */}
            <p>
              This is a page made by a fan for fans. 
            </p>
            <p>
            In the world created by JRR Tolkien, we can find many characters, most of whom have their own rich and detailed history.
            </p>
            <p>
              Just as each character has their own story, they also have their own descendants and ancestors. 
            </p>
            <br></br>
            <p>
              The goal of this website (which is still a work in progress) is to list each of the characters and their interactions in order to facilitate, 
              in some way and in a summarized form, the research work involved in learning about their family trees.
            </p>
            <br></br>
            <p>
              Enjoy the journey!
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
      <div className="sm:mb-[15vh] mb-4"></div>


      <div className="w-screen relative sm:flex sm:flex-col items-center justify-center sm:mb-0 mb-7">
        {/* Imagen decorativa */}
        <div className="relative w-full sm:h-[46.5vw] sm:flex justify-center">
          { /* Imagen decorativa como fondo */}
          <div className="absolute inset-0 w-full h-full z-10 sm:visible invisible">
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
          <div className="sm:absolute z-20 text-center">
            <h1 className="sm:text-[4vw] text-3xl font-ringm text-yellow-500/90 pt-[6.5vw] pb-0 mb-0">Family Tree</h1>
            <p className="text-[1.5vw] sm:visible invisible text-yellow-500/90 font-ringm p-0 m-0">Ask who and enter</p>
          </div>

          <div className="sm:absolute sm:top-[15vw] flex flex-col pt-[6vw] sm:px-[15vw] px-4 sm:text-center text-justify col-span-4 col-start-2">
            <h1 className="sm:text-[1.7vw] text-sm text-center font-ringm text-yellow-500/90 sm:pb-[1.5vw] pb-4">
              Eä! Let these things Be!
            </h1>
            <p className="sm:px-[15vw] px-2 sm:text-[1.2vw] text-sm pt-0 mt-0 pb-5 sm:pb-[1.5vw]">
              I am Aragorn son of Arathorn; and if by life or death I can save you, I will.
            </p>
            <p className="sm:px-[8vw] px-2 sm:text-[1.2vw] text-sm pt-0 mt-0 pb-5 sm:pb-[1.5vw]">
              The old that is strong does not wither, deep roots are not reached by the frost.
            </p>
            <p className="sm:px-[6vw] px-2 sm:text-[1.2vw] text-sm pt-0 mt-0 pb-5 sm:pb-[1.5vw]">
              For Isildur’s bane is not yet healed. And the line of Elendil is not yet broken.
            </p>
            <p className="sm:px-[4.5vw] px-2 sm:text-[1.2vw] text-sm pt-0 mt-0 pb-5 sm:pb-[1.5vw]">
              The doom of Men, that they should depart, was at first a gift of Ilúvatar. But it became a grief to them; and they feared death and desired to escape it.
            </p>
            <p className="sm:px-[2vw] px-2 sm:text-[1.2vw] text-sm pt-0 mt-0 pb-5 sm:pb-[1.5vw]">
              There was sorrow then too in the House of Fëanor; and of that sorrow came many evil things.
            </p>
            <p className="sm:px-0 px-2 sm:text-[1.2vw] text-sm pt-0 mt-0">
              Out of the Great Sea to Middle-earth I am come. In this place will I abide, and my heirs, unto the ending of the world.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">

        <div className="sm:visible invisible absolute -top-[1.9vw] -left-[3.5vw] w-[23vw] z-10 rounded-[3rem]">
          <Image
            src="/img/ui/moria_door_left.webp"
            alt="Banner"
            width={500}
            height={0}
            className="w-full h-auto"
            style={{
              filter: "drop-shadow(0 0 10px rgba(100, 200, 255, 0.9))",
            }}
          />
        </div>

        <div className="sm:visible invisible absolute -top-[1.8vw] -right-[4vw] w-[23vw] z-10 rounded-[4rem]">
          <Image
            src="/img/ui/moria_door_right.webp"
            alt="Banner"
            width={500}
            height={0}
            className="object-contain w-full h-full"
            style={{
              filter: "drop-shadow(0 0 10px rgba(100, 200, 255, 0.9))",
            }}
          />
        </div>

        <RacesContainer 
          data={data}
        />
        

        <div className="sm:visible invisible absolute bottom-0 -left-[.6vw] w-[16.5vw]">
          <Image
            src="/img/ui/moria_door_bottom_left.webp"
            alt="Banner"
            width={500}
            height={0}
            className="w-full h-auto"
            style={{
              filter: "drop-shadow(0 0 10px rgba(100, 200, 255, 0.9))",
            }}
          />
        </div>

        <div className="sm:visible invisible absolute bottom-0 -right-[2.7vw] w-[17vw]">
          <Image
            src="/img/ui/moria_door_bottom_right.webp"
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


      <div className="sm:visible invisible relative w-[100vw] left-1/2 -translate-x-1/2">
        <Image
          src="/img/ui/moria_door_bottom.png"
          alt="Banner"
          width={1920}
          height={0}
          className="w-full h-auto object-contain"
          style={{
            filter: "brightness(0) invert(1) drop-shadow(0 0 15px rgba(100, 200, 255, 0.8))",
            mixBlendMode: "screen",
            opacity: "0.9"
          }}
        />
      </div>

      <div className="mb-50"></div>
      <Banner />
      <div className="mb-50"></div>
      <Foot />

    </div>
  );
}

export default Home
