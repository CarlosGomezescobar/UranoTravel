import { AnimatePresence, motion } from "framer-motion"

export function TransitionPage() {
    return (
        <AnimatePresence mode="wait">
         <div>
         <motion.div
  className="fixed top-0 bottom-0 right-full w-screen h-screen z-10"
  variants={transitionVariantsPage}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut"}}
  style={{
    backgroundImage: 'url("/logo/logo-real-verdadero1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
</motion.div>
         
         </div>
        
        </AnimatePresence>
    )
}

const transitionVariantsPage = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
       x: "0%",
       width: "0%"
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"]
    }
}