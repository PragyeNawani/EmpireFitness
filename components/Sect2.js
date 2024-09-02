"use client"
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
const Sect2 = () => {
    const ref = useRef(null)
        const { scrollYProgress} = useScroll({
          target: ref,
          offset: ["start end", "end start"]
        })
        const cardscale = useTransform(scrollYProgress, [0 , 0.5 , 1], [0.5,1 , 0.5 ])
        const cardsopa = useTransform(scrollYProgress, [0 , 0.5 , 1], [0,1, 0])
        

       
  return (
    <section ref={ref} id="features" className="h-[100vh] w-[100%] bg-transparent gymbgu py-10 flex flex-col gap-10">
        <motion.div style={{scale:cardscale, opacity:cardsopa}} className="head w-fit backdrop-blur-sm border-2 border-orange-200 rounded-xl mx-auto">
            <h1 className='text-5xl font-bold text-orange-300 landshadow rounded-xl px-10 pt-5 pb-6 backdrop-blur-sm cardshadow2 text-center'>Services</h1>
        </motion.div>
        <div className="container flex w-full h-[80%] items-center gap-5 px-5 mx-auto">
          <motion.div style={{scale:cardscale, opacity:cardsopa}} className="card w-1/3 h-fit flex flex-col gap-5 items-center border-2 border-white rounded-xl backdrop-blur-sm cardshadow">
          <h1 className='mt-4 text-3xl font-bold text-amber-300'>Personal Training</h1>
          <div className='px-10'><Image src="/trainer.png" width={300} height={300} className='rounded-xl img' alt="" /></div>
          <span className='px-10 pb-5 text-amber-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur tempora voluptatum quia omnis rerum praesentium sed architecto, quam accusantium nam facilis delectus, impedit fuga beatae sequi veniam blanditiis minus, magnam culpa nesciunt! Tempore soluta ad distinctio illum quam ullam expedita, sit doloremque harum rerum perferendis perspiciatis, saepe mollitia. Cupiditate!</span>
          </motion.div>
          <motion.div style={{scale:cardscale, opacity:cardsopa}} className="card w-1/3 h-fit flex flex-col gap-5 items-center border-2 border-white rounded-xl backdrop-blur-sm cardshadow">
          <h1 className='mt-4 text-3xl font-bold text-amber-300'>24/7 Open</h1>
          <div className='px-10'><Image src="/247.gif" width={200} height={300} className='rounded-xl img' alt="" /></div>
          <span className='px-10 pb-5 text-amber-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur tempora voluptatum quia omnis rerum praesentium sed architecto, quam accusantium nam facilis delectus, impedit fuga beatae sequi veniam blanditiis minus, magnam culpa nesciunt! Tempore soluta ad distinctio illum quam ullam expedita, sit doloremque harum rerum perferendis perspiciatis, saepe mollitia. Cupiditate!</span>
          </motion.div>
          <motion.div style={{scale:cardscale, opacity:cardsopa}} className="card w-1/3 h-fit flex flex-col gap-5 items-center border-2 border-white rounded-xl backdrop-blur-sm cardshadow">
          <h1 className='mt-4 text-3xl font-bold text-amber-300'>Calisthenics Training</h1>
          <div className='px-10'><Image src="/calisthenics.jpg" width={300} height={300} className='rounded-xl' alt="" /></div>
          <span className='px-10 pb-5 text-amber-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur tempora voluptatum quia omnis rerum praesentium sed architecto, quam accusantium nam facilis delectus, impedit fuga beatae sequi veniam blanditiis minus, magnam culpa nesciunt! Tempore soluta ad distinctio illum quam ullam expedita, sit doloremque harum rerum perferendis perspiciatis, saepe mollitia. Cupiditate!</span>
          </motion.div>
          
        </div>
    </section>
  )
}

export default Sect2
