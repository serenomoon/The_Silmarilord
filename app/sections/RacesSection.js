import { AnimatedButton } from "../ui/AnimatedButton"

export const RacesSection = ({data, index , img_bg ="illuvatar.jpg", h ,w , order="grid grid-cols-3 gap-y-5"}) => {
    return(
        <div className="flex justify-between">
            <div className="border-x-4 ml-[2vw] mr-[1vw] border-white w-[12vw]"></div>
            <div 
                className={`${order} justify-center bg-cover py-5 w-[70vw] mx-[1vw] rounded-lg`}
                style={{
                    backgroundImage: `url(/img/backgrounds/${img_bg})`
                }}
                >
                {data.lotr_info[index].map((lotr,i) => {
                    return(
                        <AnimatedButton
                        key={i}
                        id={lotr.race + i.toString()}
                        name={lotr.nombre} 
                        wiki={lotr.link}
                        info={lotr.info}
                        img={lotr.img}
                        color_bg={lotr.color_bg}
                        h={h}
                        w={w}
                        />
                    )
                })}
            </div> 
            <div className="border-x-4 mr-[1vw] ml-[1vw] border-white w-[12vw]"></div>
        </div>

    )
}