/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img src={icon} alt={title} className='w-16 h-16 object-contain' />
              <h3 className='text-white text-[20] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-17 max-w-3xl leading-[30px]'
      >
      I love working on the front-end of websites and build sleek and modern web applications utilizing React and Next.js. I try to continuously expand my skill set by constantly learning new tools, most recently Three.js for 3D development and ocassionally p5.js for generative art, as I enjoy experimenting and creating diverse pieces of work. My goal is to create or contribute to work that helps the audience, is creative and informative, or is simply fun and delightful. If you&apos;re seeking a dedicated individual to breathe life into your web projects, your search ends here!
    </motion.p>
    <div className='mt-20 flex justify-center flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")