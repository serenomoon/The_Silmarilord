import Image from "next/image"
import { AnimatedButton } from "./AnimatedButton"
import { useEffect } from "react"

export const FrameButton = ({name, wiki, info, img, marco, color_bg, h, w, indexes, progenitor ,descendant ,couple ,siblings ,related, isLast }) => {
    // Asegura un z-index válido
    // const zIndexValue = 2000 - Math.max(0, indexes);
    const zIndexValue = indexes.toString()
    const nameWithSpace = name.replace(/_/g, " ");
    
    // Verifica que los props esenciales existan
    if (!marco || !img) {
        console.warn(`Missing essential props for ${name}`);
        return null;
    }

    return (
        <div id={`${nameWithSpace}`} className="relative w-[18vw] h-[20vw] flex justify-center items-center mx-auto"
            style={{zIndex: zIndexValue}}
        >
            {/* Contenedor de la imagen de contenido - CENTRADA */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[10vw] h-[16vw]"> {/* Ajusta el tamaño con w-2/3 h-2/3 o el % que necesites */}
                    <Image
                        src={img}
                        alt="Imagen de contenido"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Marco (ocupa todo el espacio) */}
            <div className="absolute inset-0 w-full h-full z-10">
                <Image
                    src={marco}
                    alt="Marco decorativo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            <div className="absolute inset-0 w-full h-full z-20">
                <div className="relative w-full h-full">
                    {/* <span className="absolute whitespace-nowrap bottom-4 font-ringm left-1/2 -translate-x-1/2 w-fit px-3 rounded-2xl text-black border-[#9d342e] border-2 bg-gradient-to-r from-[#cb3d17] via-[#f3cb00] to-[#cb3d17] text-center">
                        {name.replace(/_/g, ' ')}
                    </span> */}
                    <div className="absolute bottom-4 font-ringm left-1/2 -translate-x-1/2">
                        <AnimatedButton 
                            name={name} 
                            wiki={wiki} 
                            info={info} 
                            img={img} 
                            color_bg={color_bg} 
                            h={h} 
                            w={w}
                            progenitor={progenitor}
                            descendant={descendant}
                            couple={couple}
                            siblings={siblings}
                            related={related}
                            zIndex={zIndexValue}                 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}