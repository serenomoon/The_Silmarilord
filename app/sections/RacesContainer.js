import React, { useState } from 'react';
import { RacesSection } from './RacesSection';

export const RacesContainer = ({ data }) => {
    
    const [globalIndex, setGlobalIndex] = useState(4444);

    // Calcula cuántos elementos hay antes de cada sección
    //   const getStartingIndex = (sectionIndex) => {
    //     let totalElementsBefore = 0;
    //     for (let i = 0; i < sectionIndex; i++) {
    //       totalElementsBefore += data.lotr_info[i].length;
    //     }
    //     return globalIndex - totalElementsBefore;
    //   };
    const getStartingIndex = (sectionIndex) => {
        let totalElementsBefore = 0;
        for (let i = 0; i < sectionIndex; i++) {
            totalElementsBefore += data.lotr_info[i].length;
        }
        // Asegúrate de que el índice no sea negativo
        return Math.max(0, globalIndex - totalElementsBefore);
        };

    const raceSections = [
        { index: 0, title: "God", order: "flex mb-5" },
        { index: 1, title: "Ainur", img_bg: "valar.webp" },
        { index: 2, title: "No", img_bg: "valar.webp" },
        { index: 3, title: "Ents", img_bg: "valar.webp" },
        { index: 4, title: "Elfs", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 5, title: "No", img_bg: "valar.webp" },
        { index: 6, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 7, title: "No", img_bg: "valar.webp" },
        { index: 8, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 9, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 10, title: "No", img_bg: "valar.webp" },
        { index: 11, title: "No", img_bg: "valar.webp" },
        { index: 12, title: "Half-Elves", img_bg: "valar.webp", order: "grid sm:grid-cols-1 grid-cols-1" },
        { index: 13, title: "No", img_bg: "valar.webp" },
        { index: 14, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-1 grid-cols-1" },
        { index: 15, title: "Dwarves", img_bg: "valar.webp" },
        { index: 16, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-1 grid-cols-1" },
        { index: 17, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 18, title: "No", img_bg: "valar.webp" },
        { index: 19, title: "Men", img_bg: "valar.webp" },
        { index: 20, title: "No", img_bg: "valar.webp" },
        { index: 21, title: "No", img_bg: "valar.webp" },
        { index: 22, title: "No", img_bg: "valar.webp" },
        { index: 23, title: "No", img_bg: "valar.webp" },
        { index: 24, title: "No", img_bg: "valar.webp" },
        { index: 25, title: "No", img_bg: "valar.webp" },
        { index: 26, title: "No", img_bg: "valar.webp" },
        { index: 27, title: "No", img_bg: "valar.webp" },
        { index: 28, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 29, title: "No", img_bg: "valar.webp" },
        { index: 30, title: "No", img_bg: "valar.webp" },
        { index: 31, title: "No", img_bg: "valar.webp" },
        { index: 32, title: "No", img_bg: "valar.webp" },
        { index: 33, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 34, title: "No", img_bg: "valar.webp" },
        { index: 35, title: "No", img_bg: "valar.webp" },
        { index: 36, title: "No", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 37, title: "Hobbits", img_bg: "valar.webp" },
        { index: 38, title: "Great Eagles", img_bg: "valar.webp" },
        { index: 39, title: "Great Spiders", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 40, title: "Werewolves", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" },
        { index: 41, title: "Dragons", img_bg: "valar.webp" },
        { index: 42, title: "Unknown", img_bg: "valar.webp", order: "grid sm:grid-cols-2 grid-cols-2" }
    ];

  return (
    <>
      {raceSections.map((race) => (
        <RacesSection
          key={race.index}
          data={data}
          index={race.index}
          startingIndex={getStartingIndex(race.index)}
          h={10}
          w={50}
          img_bg={race.img_bg}
          order={race.order}
          setGlobalIndex={setGlobalIndex}
          title={race.title}
        />
      ))}
    </>
  );
};
