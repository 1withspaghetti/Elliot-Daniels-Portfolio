"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

export default function InteractiveImage(props: ImageProps) {

    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        const listener = () => {
            setIsOpen(false);
        }
        window.addEventListener('scroll', listener);
        return () => window.removeEventListener('scroll', listener);
    }, []);

    return (
        <div className={`relative w-full ${isOpen ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
            <motion.div
                className={`absolute top-0 left-0 right-0 bottom-0 ${isOpen ? 'fixed w-auto h-auto m-auto max-w-full' : 'w-full h-full'}`}
            >
                <Image {...props} className="h-96" />
            </motion.div>
        </div>
    );
}