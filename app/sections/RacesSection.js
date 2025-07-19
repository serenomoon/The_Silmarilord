import { AnimatedButton } from "../ui/AnimatedButton"

export const RacesSection = ({data, index , img_bg ="illuvatar.jpg", h ,w , order="grid grid-cols-5 gap-y-5"}) => {
    return(
        <div className={`${order} bg-[url(/img/backgrounds/${img_bg})] justify-center bg-cover py-5`}>
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

    )
}