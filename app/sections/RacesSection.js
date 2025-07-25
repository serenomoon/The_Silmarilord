import { AnimatedButton } from "../ui/AnimatedButton"
import { FrameButton } from "../ui/FrameButton"


export const RacesSection = ({ data, index, img_bg = "illuvatar.jpg", h, w, order = "grid sm:grid-cols-3 grid-cols-2", marco }) => {
    return (
        <div className="flex justify-between">
            <div className="flex justify-between overflow-hidden">
                <div
                    className="border-x-[5px] ml-[2vw] mr-[1vw] border-white w-[12vw]"
                    style={{
                        boxShadow: `
                        -10px 0 10px -5px rgba(100, 200, 255, 0.8), /* Brillo izquierdo */
                        10px 0 10px -5px rgba(100, 200, 255, 0.8)   /* Brillo derecho */
                        `,
                        position: "relative", // Necesario para el pseudo-elemento
                    }}
                ></div>
            </div>

            <div className="pb-[3vw]">
                <div className="w-[70vw] mx-[1vw] rounded-lg">
                    <h1 className="text-yellow-500/80 text-[2vw] font-ringm text-center">{data.lotr_info[index][0].race}</h1>
                </div>
                <div className={`${order} justify-center bg-cover`} >
                    {data.lotr_info[index].map((lotr, i) => {
                        return (
                            <FrameButton
                                key={i}
                                zindex={i}
                                id={lotr.race + i.toString()}
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
            <div className="flex justify-between overflow-hidden">
                <div
                    className="border-x-[5px] ml-[2vw] mr-[1vw] border-white w-[12vw]"
                    style={{
                        boxShadow: `
                            -10px 0 10px -5px rgba(100, 200, 255, 0.8), /* Brillo izquierdo */
                            10px 0 10px -5px rgba(100, 200, 255, 0.8)   /* Brillo derecho */
                            `,
                        position: "relative", // Necesario para el pseudo-elemento
                    }}
                ></div>
            </div>
        </div>

    )
}