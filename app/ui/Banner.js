import Image from "next/image"


export const Banner = () => {
    return(
        <div className="w-full sm:px-10 px-2 border-yellow-500/60 border-y-2 bg-gray-900 text-shadow-lg/80">
            <div className="w-full sm:h-40 h-20 relative opacity-80">
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
        </div>
    )
}