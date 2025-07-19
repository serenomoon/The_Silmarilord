import Image from "next/image"


export const Banner = () => {
    return(
        <div className="w-full h-40 relative my-10">
            <Image
                src="/img/one-banner.png"
                alt="Banner"
                fill
                className="object-contain"
                style={{
                    filter: "invert(77%) sepia(71%) saturate(3963%) hue-rotate(357deg) brightness(102%) contrast(103%)"
                }}
            />
        </div>
    )
}