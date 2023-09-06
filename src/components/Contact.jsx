/* eslint-disable react/jsx-no-target-blank */
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SphereCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === '' || form.email.trim() === '' || form.message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    setLoading(true);
    //template_eb8dubi
    // service_bdzi2jv
    // M9hsNWv19UJhBOnmC
    emailjs.send(
      'service_bdzi2jv',
      'template_eb8dubi',
      {
        from_name: form.name,
        to_name: 'Ashrita',
        from_email: form.email,
        to_email: 'ashrita315@gmail.com',
        message: form.message,
      },
      'M9hsNWv19UJhBOnmC'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      
      setForm({
        name: "",
        email: "",
        message: "",
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong.");
    })

  }

  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'> 
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                  Your Name
                </span>
                <input 
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                  Your Email
                </span>
                <input 
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                  Your Message
                </span>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                />
              </label>

              <button 
                type='submit'
                className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
                >
                {loading ? 'Sending...' : 'Send'}
              </button>
          </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
        <SphereCanvas />
      </motion.div>
    </div>
    <motion.div
    className='flex justify-end items-center'
    >
      <Tilt 
          options={{
            max: 45,
            scale: 1,
            speed: 450,
            }}
          className='w-[350px] h-full bg-tertiary p-5 rounded-xl shadow-card'
          >
        <ul className='text-secondary flex gap-4 px-2'>
        
          <a href='https://www.linkedin.com/in/ashrita-das-b72255200/' target='_blank' className='flex hover:text-[white]'><AiFillLinkedin size={20}/>LinkedIn</a>
          <a href='https://github.com/Ashrita-Das' target='_blank' className='flex hover:text-[white]'><AiFillGithub size={20} />Github</a>
          <a href='https://www.instagram.com/ashritadas_/' target='_blank' className='flex hover:text-[white]'><AiFillInstagram size={20}/>Instagram</a>
          
          </ul>
          </Tilt> 
      </motion.div>
    </>
  )
}

export default SectionWrapper(Contact, "contact");