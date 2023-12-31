/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={ `${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
        
        </div>
        <div>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className={`${styles.heroHeadText} text-white`}>Hey, I'm <span className="bg-gradient-to-r from-[#00cea8] to-[#bf61ff] bg-clip-text text-transparent">Ashrita</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I write code and build stuff.
            {/* <br className="sm:block hidden" /> use this break tag in case of larger p tag content for smaller devices */}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero