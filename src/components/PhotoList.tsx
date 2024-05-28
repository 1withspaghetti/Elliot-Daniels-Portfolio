import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import InteractiveImage from './InteractiveImage';

export type PhotoListProps = {
    // The list of photo URLs to display, relative to the public directory
    photos: StaticImageData[],
};

export default function PhotoList({ photos }: PhotoListProps) {

    return (
        <div className="flex flex-wrap justify-center gap-2 p-4">
            {photos.map((photo, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, y: 100}}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className=''
                >
                    <Image
                        src={photo}
                        alt="Portfolio Image"
                        className="h-64 max-w-md overflow-hidden object-cover object-center pointer-events-none"
                    />
                </motion.div>
            ))}
        </div>
    )
}
