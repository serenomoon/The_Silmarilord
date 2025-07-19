import Image from "next/image";
import Card from "./card/Card";
import data from "../lotr_info.json"
import {AnimatedButton} from "./ui/AnimatedButton";

const Home = () => {
  return (
    <div
      // className="bg-[url(/img/lotrmap.jpg)]"
      className="w-full"
    >

      <div className="h-screen flex justify-center">
        <h1 className="text-2xl">Lord Of The Ancestors</h1>
      </div>


      <div className="grid justify-center mb-5">
        {data.lotr_info[0].map((lotr,i) => {
          return(
          <AnimatedButton
              key={i}
              name={lotr.nombre} 
              wiki={lotr.link}
              info={lotr.info}
              img={lotr.img}
              color_bg={lotr.color_bg}
              h={16}
              w={60}
            />
          )
        })}
      </div>

      <div className="grid grid-cols-5 justify-center gap-y-5">
        {data.lotr_info[1].map((lotr,i) => {
          return(
          <AnimatedButton
              key={i}
              name={lotr.nombre} 
              wiki={lotr.link}
              info={lotr.info}
              img={lotr.img}
              color_bg={lotr.color_bg}
              h={16}
              w={60}
            />
          )
        })}
      </div>  
     
    </div>
  );
}

export default Home
