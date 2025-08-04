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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [globalIndex, setGlobalIndex] = useState(999);


  // Calcula cuántos elementos hay antes de cada sección
  const getStartingIndex = (sectionIndex) => {
    let totalElementsBefore = 0;
    for (let i = 0; i < sectionIndex; i++) {
      totalElementsBefore += data.lotr_info[i].length;
    }
    return globalIndex - totalElementsBefore;
  };

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

        <div className="absolute -top-[1.9vw] -left-[3.5vw] w-[23vw] z-10 rounded-[3rem]">
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

        <div className="absolute -top-[1.8vw] -right-[4vw] w-[23vw] z-10 rounded-[4rem]">
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

        {/* ILLUVATAR */}
        <RacesSection
          data={data}
          index={0}
          startingIndex={getStartingIndex(0)} // 999 - 0 = 999
          h={10}
          w={50}
          order={"flex mb-5"}
          setGlobalIndex={setGlobalIndex}
          title={"God"}
        />

        {/* VALAR */}
        <RacesSection
          data={data}
          index={1}
          startingIndex={getStartingIndex(1)} // 999 - (elementos en sección 0)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"Ainur"}
        />

        {/* MAIA */}
        <RacesSection
          data={data}
          index={2}
          startingIndex={getStartingIndex(2)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* ENTS */}
        <RacesSection
          data={data}
          index={3}
          startingIndex={getStartingIndex(3)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"Ents"}
        />

        {/* MINYAR */}
        <RacesSection
          data={data}
          index={4}
          startingIndex={getStartingIndex(4)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          order={"grid sm:grid-cols-2 grid-cols-2"}
          title={"Elfs"}
        />

        {/* VANYAR */}
        <RacesSection
          data={data}
          index={5}
          startingIndex={getStartingIndex(5)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* TATYAR */}
        <RacesSection
          data={data}
          index={6}
          startingIndex={getStartingIndex(6)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          order={"grid sm:grid-cols-2 grid-cols-2"}
          title={"No"}
        />

        {/* ÑOLDOR */}
        <RacesSection
          data={data}
          index={7}
          startingIndex={getStartingIndex(7)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* NELYAR */}
        <RacesSection
          data={data}
          index={8}
          startingIndex={getStartingIndex(8)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          order={"grid sm:grid-cols-2 grid-cols-2"}
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Teleri-Falmari */}
        <RacesSection
          data={data}
          index={9}
          startingIndex={getStartingIndex(9)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          order={"grid sm:grid-cols-2 grid-cols-2"}
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Teleri-Sindar */}
        <RacesSection
          data={data}
          index={10}
          startingIndex={getStartingIndex(10)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Teleri-Nandor */}
        <RacesSection
          data={data}
          index={11}
          startingIndex={getStartingIndex(11)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Edain-Sindar */}
        <RacesSection
          data={data}
          index={12}
          startingIndex={getStartingIndex(12)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          order={"grid sm:grid-cols-1 grid-cols-1"}
          setGlobalIndex={setGlobalIndex}
          title={"Half-Elves"}
        />

        {/* Peredhil */}
        <RacesSection
          data={data}
          index={13}
          startingIndex={getStartingIndex(13)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Peredhil-Mortal */}
        <RacesSection
          data={data}
          index={14}
          startingIndex={getStartingIndex(14)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          order={"grid sm:grid-cols-1 grid-cols-1"}
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* DWARVES */}
        {/* King of Durin's Folk */}
        <RacesSection
          data={data}
          index={15}
          startingIndex={getStartingIndex(15)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"Dwarves"}
        />

        {/* King of the Broadbeam Dwarves */}
        <RacesSection
          data={data}
          index={16}
          startingIndex={getStartingIndex(16)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          order={"grid sm:grid-cols-1 grid-cols-1"}
          title={"No"}
        />

        {/* Dwarves of Nogrod */}
        <RacesSection
          data={data}
          index={17}
          startingIndex={getStartingIndex(17)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          order={"grid sm:grid-cols-2 grid-cols-2"}
          title={"No"}
        />

        {/* Dwarves of Durin's Folk */}
        <RacesSection
          data={data}
          index={18}
          startingIndex={getStartingIndex(18)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Edain - House of Bëor */}
        <RacesSection
          data={data}
          index={19}
          startingIndex={getStartingIndex(19)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"Men"}
        />

        {/* Edain - Haladin */}
        <RacesSection
          data={data}
          index={20}
          startingIndex={getStartingIndex(20)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Edain - Hadorians */}
        <RacesSection
          data={data}
          index={21}
          startingIndex={getStartingIndex(21)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Easterlings */}
        <RacesSection
          data={data}
          index={22}
          startingIndex={getStartingIndex(22)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Numenorians */}
        <RacesSection
          data={data}
          index={23}
          startingIndex={getStartingIndex(23)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Dúnedain-Arnor */}
        <RacesSection
          data={data}
          index={24}
          startingIndex={getStartingIndex(24)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Dúnedain-Arthedain */}
        <RacesSection
          data={data}
          index={25}
          startingIndex={getStartingIndex(25)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        {/* Dúnedain-Gondor */}
        <RacesSection
          data={data}
          index={26}
          startingIndex={getStartingIndex(26)} // 999 - (elementos en sección 0 + sección 1)
          h={10}
          w={50}
          img_bg="valar.webp"
          setGlobalIndex={setGlobalIndex}
          title={"No"}
        />

        

        <div className="absolute bottom-0 -left-[.6vw] w-[16.5vw]">
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

        <div className="absolute bottom-0 -right-[2.7vw] w-[17vw]">
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


      <div className="relative w-[100vw] left-1/2 -translate-x-1/2">
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
      <Foot />

    </div>
  );
}

export default Home
