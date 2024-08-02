import { useEffect, useRef } from "react";
import { TransitionProps } from "./Transition.types"
import { useInView } from "framer-motion";
import { motion } from "framer-motion"
import { FadeIn } from "./TransitionFramer";

export function Transition(props: TransitionProps) {
    const { children, className } = props
    const ref = useRef(null)

    const isInView = useInView(ref, { once: false })

    useEffect(() => {
        if (isInView) {
            // You can add more logic here when the component comes into view
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div 
                variants={FadeIn()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="hidden"
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}