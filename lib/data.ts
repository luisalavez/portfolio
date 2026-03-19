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
      "Developed a monitoring system using ASP.NET MVC (Razor) for production tracking and equipment failure reporting. Built custom REST endpoints and UI views using AngularJS, jQuery and Bootstrap. Designed relational database schemas and tables in SQL Server with constraints and indexes. Integrated real-time updates using SignalR to display live production data. Consumed external systems to retrieve machine and personnel information.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2016 - Aug 2018",
  },
  {
    title: "Web Developer",
    location: "Baja Logics, Tijuana, Mexico",
    description:
      "Developed REST APIs using ASP.NET Core and C# to deliver KPI metrics such as efficiency and material quality. Created stored procedures in OracleDB for API data consumption. Implemented backend logic using layered architecture and version control with TortoiseSVN.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2018 - Nov 2018",
  },
  {
    title: "Web Developer",
    location: "Global Hawk Insurance, Tijuana, Mexico",
    description:
      "Built REST APIs using ASP.NET Core and C# with layered architecture for vehicle policy tracking. Developed front-end features using Angular and React js to manage forms and insurance data. Created endpoints for managing coverage catalogs, vehicle types and customer information. Deployed applications using Azure App Services and integrated Azure SQL Server, Blob Storage and Key Vault. Used Entity Framework and GraphQL in integrations and reporting.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Nov 2021",
  },
  {
    title: "Full Stack Developer",
    location: "Definity First, Tijuana, Mexico",
    description:
      "Developed loan management systems and payment tracking applications using .NET Core, C#, React js and Angular. Built and maintained microservices using Node.js, ASP.NET Core and Python following CQRS. Created and updated RESTful endpoints, integrating with SQL Server, Entity Framework and Dapper, using indexing and constraints for performance. Built AWS Lambdas using Node.js and TypeScript, deploying via Terraform and API Gateway, monitoring CloudWatch with relational databases hosted on AWS RDS. Implemented API documentation using Swagger/OpenAPI. Designed and deployed CI/CD pipelines with Azure DevOps and managed containerized services with Kubernetes. Wrote and executed unit tests to ensure quality across services. Actively participated in Scrum ceremonies and used Jira to manage stories.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Jun 2024",
  },
  {
    title: "Senior Software Developer",
    location: "FPT Software, Tijuana, Mexico",
    description:
      "Built and maintained REST APIs using ASP.NET Core and C# with layered architecture. Developed UI components with Angular for visualizing reports from hospital patient questionnaires. Enhanced endpoints in .NET Core to expose additional data, update search filters and optimize SQL Server queries. Defined and provisioned AWS infrastructure using AWS CDK including S3, Cognito, Lambda and DynamoDB. Created and executed unit tests with NUnit, contributing to code quality and maintainability. Implemented API documentation using Swagger/OpenAPI. Collaborated on code reviews using GitHub Actions and maintained high standards with SonarCloud. Actively participated in Scrum ceremonies and used Jira to manage stories.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Jan 2025",
  },
  {
    title: "Full Stack Developer",
    location: "Inteligente.IO, Tijuana, Mexico",
    description:
      "Migrating modules from a legacy system using React js with Redux-Saga and applying feature-based architecture to reduce technical debt. Updating Go API endpoints with clean architecture and GORM for CRUD operations. Raising code coverage with Jest and Selenium e2e tests. Using GitHub for version control and CI/CD through GitHub Actions to streamline deployments. Actively participating in Scrum ceremonies and using Jira to manage stories.",
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
