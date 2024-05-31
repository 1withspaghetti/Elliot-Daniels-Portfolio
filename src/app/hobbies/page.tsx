"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import PhotoList from "@/components/PhotoList";
import { HOBBIES_PAGE_IMAGES, HOBBIES_PAGE_COVER } from "@/portfolio_config";

export default function Hobbies() {

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
                className="relative w-full max-w-7xl h-[512px] m-4 sm:m-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
            >
                <Image
                    src={HOBBIES_PAGE_COVER} 
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
                    className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center"
                >
                    <div>
                        <div className="h-12 bg-gradient-to-b from-transparent to-black opacity-65" />
                        <div className="p-4 sm:p-8 bg-black bg-opacity-65 font-lg">
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                transition={{ ease: "easeOut", duration: 0.5, delay: 1.0}}
                                className="overflow-hidden"
                            >
                                Hi, I'm Elliot Daniels 👋 <br /> <br />
                                I'm a photographer and local gay furry based in Seattle WA with a dream of becoming a professional photographer.
                                I like to distribute ghost guns and blow up large corporations like Apple and Microsoft. I am a threat to my 
                                community and I am proud of it.
                            </motion.div>
                        </div>
                        <div className="h-12 bg-gradient-to-t from-transparent to-black opacity-65" />
                    </div>
                </motion.div>

            </motion.div>
        </div>

        <div className="w-full mb-24">
            <PhotoList photos={HOBBIES_PAGE_IMAGES} />
        </div>
    </main>
  );
}