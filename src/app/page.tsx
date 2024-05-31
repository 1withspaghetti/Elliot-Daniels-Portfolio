"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import cover from "../../public/imgs/cover.webp"
import cover_mobile from "../../public/imgs/cover_mobile.webp"
import FontCycleHeader from "@/components/FontCycleHeader";
import Link from "next/link";
import { Edu_TAS_Beginner } from "next/font/google";
import PhotoList from "@/components/PhotoList";
import { HOME_PAGE_IMAGES } from "@/portfolio_config";
import ScrollIndicator from "@/components/ScrollIndicator";
import Header from "@/components/Header";
import NotByAIBadge from "@/components/NotByAIBadge";
import { useEffect, useState } from "react";

const edu_tas_beginner = Edu_TAS_Beginner({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {

  const { scrollY } = useScroll();
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const headerOpacity = useTransform(scrollY, (value) => Math.max((value - windowHeight + 100) / 100, 0));


  const [ useMobileCover, setUseMobileCover ] = useState<boolean|undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setUseMobileCover(window.innerHeight > window.innerWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main
      className="w-full"
    >
      <motion.div
        className="relative w-full h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        { useMobileCover !== undefined &&
          ( useMobileCover ?
            <Image src={cover_mobile} alt="Cover Image" fill priority placeholder="blur" className="object-center object-cover pointer-events-none" />
          :
            <Image src={cover} alt="Cover Image" fill priority placeholder="blur" className="object-center object-cover pointer-events-none" />
          )
        }

        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-[#0d0e16]" />

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.25] sm:scale-[0.4] lg:scale-75 2xl:scale-100">
          <div className="flex flex-col items-center">
            <FontCycleHeader text="ELLIOT DANIELS" duration={2.5} cycles={25} finalFontIndex={5} />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 1280 }}
              transition={{ ease: "easeOut", duration: 2, delay: 1 }}
              className="my-4 h-1 bg-white rounded-full"
            >
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 2.125 }}
              className="text-white text-5xl tracking-widest"
            >
              <span className={edu_tas_beginner.className}>
                Photography Portfolio
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-1/4 sm:bottom-1/2 left-0 translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 2 }}
        >
          <Link href="/about" className="p-8 flex flex-col items-center gap-2 group">
            <div className="rounded-full bg-white p-2 group-hover:-translate-x-3 transition">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>
            </div>
            <b className="group-hover:-translate-x-1 transition">
              About
            </b>
          </Link>
        </motion.div>

        <motion.div 
          className="absolute bottom-1/4 sm:bottom-1/2 right-0 translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 2.25 }}
        >
          <Link href="/hobbies" className="p-8 flex flex-col items-center gap-2 group">
            <div className="rounded-full bg-white p-2 group-hover:translate-x-3 transition">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
            </div>
            <b className="group-hover:translate-x-1 transition">
              Hobbies
            </b>
          </Link>
        </motion.div>

        <motion.div 
          className="absolute bottom-0 right-0 p-4 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 2.5 }}
        >
          <NotByAIBadge />
        </motion.div>

        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 2.75 }}
        >
          <ScrollIndicator />
        </motion.div>

      </motion.div>

      <motion.div
        style={{ opacity: headerOpacity }}
        className="sticky top-0 left-0 right-0 z-40 shadow"
      >
        <Header />
      </motion.div>

      <div className="w-full mb-24">
        <PhotoList photos={HOME_PAGE_IMAGES} />
      </div>
    </main>
  );
}
