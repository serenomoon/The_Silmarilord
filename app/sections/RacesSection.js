"use client"
import { useEffect } from "react"
import { AnimatedButton } from "../ui/AnimatedButton"
import { FrameButton } from "../ui/FrameButton"

export const RacesSection = ({
    data,
    index,
    startingIndex,  // Nuevo prop: índice inicial calculado
    setGlobalIndex, // Nuevo prop: actualizador del índice global
    img_bg = "illuvatar.jpg",
    h,
    w,
    order = "grid sm:grid-cols-3 grid-cols-2",
    marco,
    title
}) => {

    // Actualiza el índice global restando la cantidad de elementos en esta sección
    useEffect(() => {
        setGlobalIndex(prev => prev - data.lotr_info[index].length);
    }, [data.lotr_info, index, setGlobalIndex]);

    return (
        <div className="flex justify-between">
            <div className="sm:visible invisible flex justify-between overflow-hidden">
                <div
                    className="border-x-[5px] ml-[2vw] mr-[1vw] border-white w-[12vw]"
                    style={{
                        boxShadow: `
                        -10px 0 10px -5px rgba(100, 200, 255, 0.8),
                        10px 0 10px -5px rgba(100, 200, 255, 0.8)
                        `,
                        position: "relative",
                    }}
                ></div>
            </div>

            <div className="pb-[3vw]">
                <div className="sm:w-[70vw] w-screen sm:px-0 px-4 mx-[1vw] rounded-lg">
                    {title != "No"
                        ?
                        <>
                        <div 
                            className="bg-yellow-500/80 w-full h-0.5 mt-4"
                            style={{
                                boxShadow: `
                                    0 -5px 10px rgba(255, 215, 0, 0.8),
                                    0 5px 10px rgba(255, 255, 0, 0.8)
                                `  
                            }}
                        ></div>
                        <h1
                            className="text-yellow-500/80 sm:text-[3vw] text-2xl font-ringm text-center py-2"
                            id={title}
                            style={{
                                textShadow: `
                                0 0 5px rgba(255, 215, 0, 0.8),
                                0 0 10px rgba(255, 255, 0, 0.6),
                                0 0 15px rgba(255, 255, 0, 0.4)
                                `
                            }}
                            >
                            {title}
                        </h1>
                        <div 
                            className="bg-yellow-500/80 w-full h-0.5 mb-4"
                            style={{
                                boxShadow: `
                                    0 -5px 10px rgba(255, 215, 0, 0.8),
                                    0 5px 10px rgba(255, 255, 0, 0.8)
                                `  
                            }}
                        ></div>
                        </>
                        :
                        <></>
                    }

                    {title != data.lotr_info[index][0].race
                        ?
                        <h2
                            className="text-yellow-500/80 sm:text-[2vw] text-lg font-ringm text-center"
                            id={data.lotr_info[index][0].race}
                        >
                            {data.lotr_info[index][0].race}
                        </h2>
                        :
                        <></>
                    }
                </div>
                <div className={`${order} justify-center bg-cover`}>
                    {data.lotr_info[index].map((lotr, i) => {
                        const currentIndex = startingIndex - i; // Índice único y decreciente
                        return (
                            <FrameButton
                                key={i}
                                indexes={currentIndex}
                                name={lotr.nombre}
                                wiki={lotr.link}
                                info={lotr.info}
                                img={lotr.img}
                                color_bg={lotr.color_bg}
                                h={h}
                                w={w}
                                progenitor={lotr.progenitor}
                                descendant={lotr.descendant}
                                couple={lotr.couple}
                                siblings={lotr.siblings}
                                related={lotr.related}
                                marco={lotr.marco}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="sm:visible invisible flex justify-between overflow-hidden">
                <div
                    className="border-x-[5px] ml-[2vw] mr-[1vw] border-white w-[12vw]"
                    style={{
                        boxShadow: `
                            -10px 0 10px -5px rgba(100, 200, 255, 0.8),
                            10px 0 10px -5px rgba(100, 200, 255, 0.8)
                            `,
                        position: "relative",
                    }}
                ></div>
            </div>
        </div>
    )
}