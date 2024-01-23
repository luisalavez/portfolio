"use client";

import React, { useEffect } from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import  meImg from "@/public/me2.jpeg"

export default function Intro() {

  const { ref } = useSectionInView('Home',0.75);
  
  return (
    <section ref={ref} id="home" className='mb-28  max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
          <div className='relative'>
            <motion.div
              initial={{opacity:0, scale:0}}
              animate={{opacity:1, scale:1}}
              transition={{type:"tween", duration:0.2}}>
              <Image src={meImg} alt="Luis" 
              width="200" height="200" quality="95"
              priority={true}
              className='h-25 w-25 rounded-full object-cover border-[0.35rem]
              border-white shadow-xl'/>
            </motion.div>

            <motion.span className='absolute bottom-0 right-0 text-4xl'
              initial={{opacity:0,scale:1}}
              animate={{opacity:1,scale:1}}
              transition={{
                type:"spring",
                stiffness:125,
                delay:0.1
              }}>
                👋 
            </motion.span>
          </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay:0.1,
        }}
      >
        <span className="font-bold">Hello, I'm Luis Alavez.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">7 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">.Net</span> <span className="underline">Angular</span>{" "}
        <span className="underline">Node.js</span>.
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
      
        <a className='group bg-white  px-7 py-3 flex items-center gap-2 
          rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105
          transition cursor-pointer borderBlack dark:bg-white/10' href='/CV.pdf' download>
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>{" "}</a>

        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
          focus:scale-[1.15] 
          hover:scale-[1.15] active:scale-105
          transition cursor-pointer dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/luis-alberto-alavez-reyes-29b27a168/'
          target='_blank'>
          <BsLinkedin/>
        </a>

        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
          focus:scale-[1.15]
          hover:scale-[1.15] active:scale-105
          transition cursor-pointer dark:bg-white/10 dark:text-white/60'
          href='https://github.com/luisalavez' target='_blank'>
          <FaGithubSquare/>
        </a>
      </motion.div>
    </section>
  )
}
