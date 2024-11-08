import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

function Featured() {
  const [hoveringCard, setHoveringCard] = useState(null);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl fontlink'>Featured Projects : </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-40 mt-10">
          <div
            onMouseEnter={() => setHoveringCard("left")}
            onMouseLeave={() => setHoveringCard(null)}
            className="cardcontainer relative w-1/3 h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[yellow] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl fontlink tracking-tight">
              {"MINECRAFT".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoveringCard === "left" ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://i.ibb.co/FWzdPC0/GAME2.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            onMouseEnter={() => setHoveringCard("right")}
            onMouseLeave={() => setHoveringCard(null)}
            className="cardcontainer relative w-1/2 h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl fontlink tracking-tight">
              {"AMONG US".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoveringCard === "right" ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://i.ibb.co/0F9HcrT/GAME1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
