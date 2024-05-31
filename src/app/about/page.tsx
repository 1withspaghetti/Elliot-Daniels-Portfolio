"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import { ABOUT_PAGE_COVER } from "@/portfolio_config";

export default function About() {

  return (
    <main
      className="w-full"
    >
        <motion.div
            className="sticky top-0 left-0 right-0 z-40 shadow"
        >
            <Header />
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
            <motion.div
                className="relative w-full max-w-lg m-4 sm:m-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
            >
                <Image
                    src={ABOUT_PAGE_COVER} 
                    alt="Photo of Elliot" 
                    width={512} 
                    priority 
                    placeholder="blur" 
                    className="object-center object-cover pointer-events-none"
                />
            </motion.div>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 1.0}}
                className="max-w-lg overflow-hidden m-4"
            >
                <span className="text-2xl sm:text-4xl font-bold">My name is Elliot Daniels</span>
                <br />
                <span className="text-lg">and I’m a high school junior in Seattle. I love taking photos, fixing electronics, playing video games, and competing with my team in the FIRST Robotics Competition. I have been interested in photography for a long time but really fell in love with it after getting my first real camera for my 17th birthday. I am largely self-taught and driven by a desire to improve my skills, while I did attend a class in school, I found it to be largely unhelpful.  Some of my favorite photos have been taken in amazing places with friends and family and through photography I am able to capture moments and express the mood in a scene. I think photography is very interesting and look forward to expanding my skills in techniques and editing.</span>
            </motion.div>
        </div>
    </main>
  );
}