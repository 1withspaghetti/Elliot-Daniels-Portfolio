import { motion } from "framer-motion";
import { Inter, Sevillana, Playfair, Kanit, Bebas_Neue, Edu_TAS_Beginner, Dancing_Script } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const sevillana = Sevillana({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const playfair = Playfair({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const kanit = Kanit({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const bebas_neue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const edu_tas_beginner = Edu_TAS_Beginner({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const dancing_script = Dancing_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const fonts = [inter, sevillana, playfair, kanit, bebas_neue, edu_tas_beginner, dancing_script];

export default function FontCycleHeader(props: { text: string, duration: number, cycles: number, finalFontIndex?: number }) {
    
    const [letters, setLetters] = useState<{ text: string, fonts: string[] }[]>([]);

    useEffect(() => {
        const letters = props.text.split('').map((letter, i) => {

            const fontList = [];

            const fontListLength = Math.floor(Math.random() * (props.cycles - Math.floor(props.cycles * 0.25))) + Math.floor(props.cycles * 0.25);

            for (let j = 0; j < fontListLength; j++) {
                fontList.push(fonts[Math.floor(Math.random() * fonts.length)].style.fontFamily);
            }
            
            const endingLength = Math.floor(Math.random() * props.cycles / 3) + 1;
            for (let j = 0; j < endingLength; j++)
                fontList.push(fonts[props.finalFontIndex || 0].style.fontFamily);

            return {
                text: letter,
                fonts: fontList
            }
        });
        console.log(letters);
        setLetters(letters);
    }, [props.text]);

    return (
        <h1 
            className="text-8xl font-bold text-white flex"
        >
            {letters.map((letter, i) => (
                <motion.span 
                    key={i} 
                    initial={{ fontFamily: letter.fonts[0], width: 48 }}
                    animate={{ fontFamily: letter.fonts, width: 96 }}
                    transition={{ ease: "easeOut", duration: props.duration }}
                    className="text-center">
                        {letter.text}
                </motion.span>
            ))}
        </h1>
    );
}
