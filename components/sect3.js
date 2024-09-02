
import React, { useEffect, useRef } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from 'framer-motion'
const sect3 = () => {
    const ref = useRef(null)
        const { scrollYProgress} = useScroll({
          target: ref,
          offset: ["start end", "end start"]
        })
        const mapscale = useTransform(scrollYProgress, [0 , 0.5], [0.5,1 ])
        const mapopa = useTransform(scrollYProgress, [0 , 0.5], [0 , 1])
        const mapcontent = useTransform(scrollYProgress, [0.2, 0.5], ["-50%", "0%"])
        const mapself = useTransform(scrollYProgress, [0.2, 0.5], ["50%", "0%"])
    const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoicHJhZ3llLW5hd2FuaSIsImEiOiJjbTAwbmV2MWkxanJmMmlzMmFzY3pmcmNwIn0.tS5kbcamxKuzttoepDwxOQ'
      });
    return (
        <div ref={ref} className='gymbgu flex justify-center h-[100vh] px-16 w-[100%] mx-auto gap-20 items-center overflow-hidden'>
            <motion.div style={{scale: mapscale, opacity: mapopa, x: mapcontent}} className="content h-fit w-fit rounded-lg backdrop-blur-sm flex items-center">
                <h1 className='px-10 pt-5 pb-6 backdrop-blur-sm cardshadow2 text-5xl w-full text-orange-300 font-bold rounded-lg border-2 border-orange-200'>Our Gym location</h1>
            </motion.div>
        <motion.div style={{scale: mapscale, opacity: mapopa, x: mapself}} className='w-1/2 h-2/3 flex justify-center items-center'>
        <Map
        className='rounded-xl'
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '100%',
                width: '100%'
            }}
            >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-10.481747834041145, 51.3233379650232]} />
            </Layer>
        </Map>
        </motion.div>
        </div>
  )
}

export default sect3

