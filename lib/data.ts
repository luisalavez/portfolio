import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Engineer",
    location: "Tijuana, Mexico",
    description:
      "I graduated from Instituto Tecnológico de Tijuana. I already have a job as a jr web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Jr web developer",
    location: "Bourns de Mexico, Tijuana, Mexico",
    description:
      `Updates on a web application with ASP.NET and MVC for the visualization of the production of lines and work orders, performance graphs using
      the highcharts.js library, downtimes, and generation of reports .`,
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
  {
    title: "Web Developer",
    location: "Baja logics, Tijuana, Mexico",
    description:
      `I worked as a web developer working in a company call Foxconn. 
      Features for a manufacturing system to show production, personal assistance.`,
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Web developer",
    location: "Global Hawk Insurance, Tijuana, Mexico",
    description:
      `Working with asp.net creating, maintaining and supporting web APIs, using the repository pattern, Business layer, data access layer and entity
      framework for accounting modules, quotes and policies.`,
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full Stack Developer",
    location: "Definity first, Tijuana, Mexico",
    description:
      `Update and support existing Angular applications by handling responsive designs and deployment of said applications using AWS services such as S3, CloudFront and CloudWatch for monitoring. 
      Creation and update of lambdas using node.js with typescript for application consumption and using terraform for configuration and setting of environment variables. 
      Update and support for node.js microservices with typescript, using
      Azure pipelines for the configuration of environment variables and
      deployments to EKS.`,
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JQquery",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "SourceTree",
  "Tailwind",
  "Bootstrap",
  "Express",
  "Framer Motion",
  "Knex",
  "data-transfer-object",
  "redis",
  ".Net",
  "C#",
  "Entity framwork",
  "SignalR",
  "SQL Server",
  "Oracle",
  "AWS Services",
  "Azure Dev Ops",
  "Jira",
  "Swagger",
  "Postman",
  "Kubernetes",
  "Docker"
] as const;