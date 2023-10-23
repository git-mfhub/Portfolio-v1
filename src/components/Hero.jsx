import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] right-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row-reverse items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Point and Line */}
          <div className="w-5 h-5 rounded-full bg-[#ED572E]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <span className="stroke-black">Hi, I'm </span>
            <span className="text-[#37B59C]">Marcus</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 stroke-black`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#ED572E] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#FFFFFF] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
