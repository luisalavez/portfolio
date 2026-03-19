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
        I'm a{" "}
        <span className="font-medium">Full-Stack Engineer with over 9 years of experience</span> specializing in the design, development, and maintenance of web applications for the{" "}
        <span className="font-medium">financial, insurance, and business services</span> industries.{" "}<br/>
        My core stack is{" "}
        <span className="font-medium">
          React js, Angular, Node.js, .NET Core, Go, Python, SQL Server, PostgreSQL, AWS and Azure.
        </span><br/>
        I'm always looking to learn new technologies and deliver scalable, efficient solutions.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and working out.
      </p>
    </motion.section>
  )
}
