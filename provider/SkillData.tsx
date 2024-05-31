'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    name?: string;
}
const SkillData = ({ src, width, height, index, name }: Props) => {
    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const imageVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1
        }
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariant}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}

        >
            <Image src={src} width={width} height={height} alt={name || "image err"} />
        </motion.div>
    )
}

export default SkillData