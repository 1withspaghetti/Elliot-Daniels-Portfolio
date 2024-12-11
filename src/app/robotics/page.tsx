"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import PhotoList from "@/components/PhotoList";
import { ROBOTICS_PAGE_IMAGES, ROBOTICS_PAGE_COVER } from "@/portfolio_config";

export default function Robotics() {

  return (
    <main
      className="w-full"
    >
        <motion.div
            className="fixed top-0 left-0 right-0 z-40 shadow"
        >
            <Header />
        </motion.div>

        <div className="flex flex-col items-center mt-16">
            <motion.div
                className="relative w-full max-w-7xl h-[512px] m-4 sm:m-8 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
            >
                <Image
                    src={ROBOTICS_PAGE_COVER} 
                    alt="Photo of a robot made by my robotics team" 
                    fill
                    priority 
                    placeholder="blur" 
                    className="object-center object-cover pointer-events-none"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-0 left-0 right-0"
                >
                    <div className="w-full ">
                        <div className="h-12 bg-gradient-to-b from-transparent to-black opacity-65" />
                        <div className="p-4 sm:p-8 bg-black bg-opacity-65 font-lg">
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                transition={{ ease: "easeOut", duration: 0.5, delay: 1.0}}
                                className="overflow-hidden"
                            >
                                <div className="text-2xl max-w-4xl mx-auto hidden sm:block mb-4">
                                    <div className=""><span className="text-4xl">“</span>FIRST is a microcosm of the real engineering experience because it’s a problem too big, in a time too short, with a budget too small, and a team too large.<span className="text-4xl">”</span></div>
                                    <div className="italic text-right">-Dr. Woodie Flowers</div>
                                </div>
                                <div className="text-lg">I joined my school’s robotics team in my freshman year and instantly fell in love with it. Over the course of the 3 seasons I have been on the team so far, I have been on the mechanical team and in the most recent season I had the privilege of being my teams driver. While I can’t take photos during matches, I enjoy taking photos of the rest of my team working on the robot or cheering in the stands. The photos below are taken of my team, 8248 ChainLynx, at FIRST robotics competitions.</div>
                            </motion.div>
                        </div>
                        <div className="h-12 bg-gradient-to-t from-transparent to-black opacity-65" />
                    </div>
                </motion.div>

            </motion.div>
        </div>

        <div className="w-full mb-24">
            <PhotoList photos={ROBOTICS_PAGE_IMAGES} />
        </div>
    </main>
  );
}