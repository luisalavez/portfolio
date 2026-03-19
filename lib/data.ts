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
    title: "B.Sc. in Computer Science",
    location: "Instituto Tecnológico de Tijuana, Mexico",
    description:
      "Graduated with a degree in Computer Science. Started working as a Jr Web Developer before graduation.",
    icon: React.createElement(LuGraduationCap),
    date: "2012 - 2017",
  },
  {
    title: "Jr Web Developer",
    location: "Bourns de Mexico, Tijuana, Mexico",
    description:
      "Developed a monitoring system using ASP.NET MVC (Razor) for production tracking and equipment failure reporting. Built REST endpoints and UI views with AngularJS, jQuery and Bootstrap. Integrated real-time updates using SignalR.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2016 - Aug 2018",
  },
  {
    title: "Web Developer",
    location: "Baja Logics, Tijuana, Mexico",
    description:
      "Developed REST APIs using ASP.NET Core and C# to deliver KPI metrics such as efficiency and material quality. Created stored procedures in OracleDB and implemented backend logic using layered architecture.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2018 - Nov 2018",
  },
  {
    title: "Web Developer",
    location: "Global Hawk Insurance, Tijuana, Mexico",
    description:
      "Built REST APIs using ASP.NET Core and C# for vehicle policy tracking. Developed front-end features with Angular and React js. Deployed applications on Azure App Services integrating Azure SQL Server, Blob Storage and Key Vault.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Nov 2021",
  },
  {
    title: "Full Stack Developer",
    location: "Definity First, Tijuana, Mexico",
    description:
      "Developed loan management and payment tracking applications using .NET Core, C#, React js and Angular. Built microservices with Node.js, ASP.NET Core and Python following CQRS. Deployed AWS Lambdas via Terraform and implemented CI/CD pipelines with Azure DevOps.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Jun 2024",
  },
  {
    title: "Senior Software Developer",
    location: "FPT Software, Tijuana, Mexico",
    description:
      "Built and maintained REST APIs with ASP.NET Core and C#. Developed Angular UI components for hospital patient questionnaire reports. Provisioned AWS infrastructure (S3, Cognito, Lambda, DynamoDB) using AWS CDK. Maintained code quality with NUnit, SonarCloud and GitHub Actions.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Jan 2025",
  },
  {
    title: "Full Stack Developer",
    location: "Inteligente.IO, Tijuana, Mexico",
    description:
      "Migrating modules from a legacy system using React js with Redux-Saga and feature-based architecture. Updating Go API endpoints with clean architecture and GORM. Raising code coverage with Jest and Selenium e2e tests. Implementing CI/CD through GitHub Actions.",
    icon: React.createElement(FaReact),
    date: "Apr 2025 - Present",
  },
] as const;


export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React js",
  "Angular",
  "Redux-Saga",
  "Next.js",
  "Node.js",
  "Go",
  "Python",
  "C#",
  ".NET Core",
  "ASP.NET Core",
  "Blazor",
  "Java",
  "HTML",
  "CSS",
  "Bootstrap",
  "PostgreSQL",
  "SQL Server",
  "Oracle",
  "Entity Framework",
  "Dapper",
  "GORM",
  "Knex",
  "Azure",
  "AWS Services",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Azure DevOps",
  "GitHub Actions",
  "RabbitMQ",
  "NUnit",
  "Jest",
  "Selenium",
  "Playwright",
  "SonarCloud",
  "Postman",
  "Swagger",
  "Jira",
  "Git",
  "SignalR",
  "GraphQL",
] as const;
