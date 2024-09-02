"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from 'framer-motion'

const Sect1 = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const scaleone = useTransform(scrollYProgress, [0, 0.5, 0.95], [0.5, 1, 0.5])
  const opacityone = useTransform(scrollYProgress, [0, 0.5, 0.95], [0, 1, 0])

  return (
    <motion.section ref={ref} id="equiments" className='h-[100vh] w-[100%] gymbgu flex flex-col items-center py-10 gap-16'>
      <motion.div style={{ opacity: opacityone, scale: scaleone }} className="head backdrop-blur-sm w-fit">
        <h1 className='text-5xl font-bold text-orange-300 landshadow rounded-xl px-10 pt-5 pb-6 backdrop-blur-sm cardshadow2 border-2 border-orange-300'>Machines & Equipments</h1>
      </motion.div>
      <div className="cardshold flex gap-20 flex-wrap w-full px-10 justify-center">
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/treadmill.jpg" width={400} height={200} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Treadmill
          </div>
        </motion.div>
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/bench.jpg" width={400} height={100} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Bench Press
          </div>
        </motion.div>
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/shoulderpress.jpg" width={400} height={200} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Shoulder Press
          </div>
        </motion.div>
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/legpress.jpg" width={400} height={200} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Leg Press
          </div>
        </motion.div>
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/legext.jpg" width={400} height={200} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Leg Extension
          </div>
        </motion.div>
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/smith.jpg" width={400} height={200} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Smith Machine
          </div>
        </motion.div>
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/dumbells.jpg" width={400} height={200} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Dumbells
          </div>
        </motion.div>
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/pull.jpg" width={400} height={200} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Pull Up Bar
          </div>
        </motion.div>
        <motion.div whileInView={{ x: [-50, 0] }} initial={true} transition={{ ease: "easeOut", duration: 1 }}
          style={{ opacity: opacityone, scale: scaleone }} className="one flex flex-col gap-2 items-center backdrop-blur-sm w-[200px] h-fit cardshadow3 ">
          <div className="pic">
            <Image src="/pec.jpg" width={400} height={200} className='equip rounded-[15px]' />
          </div>
          <div className="con text-orange-100 text-xl pb-3">
            Chest Fly Machine
          </div>
        </motion.div>
      </div>

    </motion.section>
  )
}

export default Sect1
