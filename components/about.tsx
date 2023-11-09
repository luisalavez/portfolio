"use client";
import React, { useEffect } from 'react'
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');
  
  return (
    <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        Before graduating with a degree in{" "}
        <span className="font-medium">computer systems engineer</span>, I started working as a developer 
        in an automotive company, and from there I have worked in other companies related to insurance and loans;
        <span className="font-medium">my main focus is web development</span>.{" "}<br/>
        My core stack
        is{" "}
        <span className="font-medium">
          .Net, Angular , React, Next.js, Node.js, SQL Server and AWS Services. 
        </span><br/>
        I am also familiar with TypeScript and little bit of Azure. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and working out.
      </p>
    </motion.section>
  )
}
