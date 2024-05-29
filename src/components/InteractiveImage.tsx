"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function InteractiveImage({ photo }: { photo: StaticImageData }) {

    const [ isOpen, setIsOpen ] = useState(false);

    function toggleOpen() {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className={`relative ${isOpen ? 'cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={toggleOpen}>
            <div className="h-64 max-w-md overflow-hidden">
                <Image
                    src={photo}
                    height={256}
                    quality={50}
                    placeholder='blur'
                    loading="lazy"
                    alt="Portfolio Image"
                    className="w-full h-full object-cover object-center pointer-events-none"
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={photo.src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-75"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="lds-default opacity-50"><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/></div>
                        </div>
                        <Image
                            src={photo}
                            fill
                            alt="Portfolio Image"
                            className="w-full h-full object-contain object-center pointer-events-none"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}