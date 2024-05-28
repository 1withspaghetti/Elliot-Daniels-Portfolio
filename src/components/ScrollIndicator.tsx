import { motion, useScroll, useTransform } from "framer-motion"

export default function ScrollIndicator() {

    const { scrollY } = useScroll();

    //const opacity = useTransform(scrollY, [-100, 0, 100], [0, 1, 0]);
    const opacity = useTransform(scrollY, (value) => 1 - Math.min(value / 250, 1));

    return (
        <motion.div
            style={{ opacity }}
            onClick={() => window.scrollBy({ top: 250, behavior: 'smooth' })}
            className="p-8 flex gap-4 items-end"
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"/></svg>
            <span className="text-2xl">Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"/></svg>
        </motion.div>
    )
}