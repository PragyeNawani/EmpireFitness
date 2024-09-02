"use client"
import { useEffect, useRef, useState } from 'react';
import { resolve } from "styled-jsx/css";
import Intro from "@/components/intro";
import { motion, useTransform, useScroll } from "framer-motion";
import Sect1 from '@/components/Sect1';
import Sect2 from '@/components/Sect2';
import Sect3 from '@/components/sect3';
export default function Home() {
    const [opa, setOpa] = useState("opacity-1")
    // setTimeout(() => {
    //   // document.getElementById("home").classList.replace("opacity-0", "opacity-1");
    //   setOpa("opacity-1")
    //   // sect.className = "h-[100vh] w-[100%] flex justify-center items-center gymbg opacity-1"
    //   // sect.className = sect.className + "opacity-1"
    // }, 1000);
    const ref = useRef(null)
    const { scrollYProgress} = useScroll({
      target: ref,
      offset: ["end end", "end start"]
    })
    const welscale = useTransform(scrollYProgress, [0 , 0.5], [1 , 0.4])
    const welopa = useTransform(scrollYProgress, [0 , 0.5], [1 , 0])
    const welpos = useTransform(scrollYProgress, (pos)=>{
      return pos === 1 ? "relative" : "fixed"
  })
    
  return (
    <>
    {/* <Intro/> */}
    <motion.section ref={ref} id="home" className={`h-[100vh] w-[100%] flex justify-center items-center gymbg ${opa}`}>
      <motion.div style={{position : welpos}} className="text-[100px] font-bold fixed text-orange-200 landshadow" ><motion.h1 style={{scale:welscale, opacity: welopa}} >Welcome to Empire Fitness</motion.h1></motion.div>
    </motion.section>
    <Sect1/>
    <Sect2/>
    <Sect3/>
    </>
  );
}
