import oblivion from "../assets/oblivion.jpg";

const ProjectsList = [
  {
    id: 0,
    projectName: "Project Genesis",
    owner: "Adam Snape",
    ownerOffice: "Nantes",
    description:
      "The goal of genesis is to create a basic template for Apside to ease the launch of every projects.",
    tags: ["developpement", "web", "dev", "javascript", "php", "python"],
    startDate: "29/06/2022",
    image: "",
  },
  {
    id: 1,
    projectName: "Admin Template",
    owner: "James Hawlett",
    ownerOffice: "Bordeaux",
    description:
      "This project aims to develop an advanced admin section that allows the users to modify and manage their website on their own",
    tags: ["developpement", "web", "dev", "react", "express", "javascript"],
    startDate: "29/01/2023",
    image: "",
  },
  {
    id: 2,
    projectName: "The Bakery",
    owner: "Sarah Connor",
    ownerOffice: "Rennes",
    description:
      "Let's make a powerfull BREAD template that will be reusable in every case to manage the routes and access to the servers of our applications.",
    tags: ["developpement", "web", "dev", "symphony", "php", "backend"],
    startDate: "13/07/2021",
    image: "",
  },
  {
    id: 3,
    projectName: "Analytics Toolmaker",
    owner: "Jessica Lang",
    ownerOffice: "Bruxelles",
    description:
      "The idea is to generalise datatypes and create an analysis template for all the future applications requiring financial insights.",
    tags: ["data", "analytics", "python", "marketing"],
    startDate: "09/07/2022",
    image: "",
  },
  {
    id: 4,
    projectName: "Project Oblivion",
    image: { oblivion },
    owner: "Ammar Kebir",
    ownerOffice: "Casablanca",
    description:
      "Let's create a tool that will automatize specific types of actions every day at a specific time",
    tags: [
      "developpement",
      "web",
      "dev",
      "javascript",
      "automatization",
      "saas",
    ],
    startDate: "12/12/2022",
  },
  {
    id: 5,
    projectName: "The Rainbow Code",
    owner: "Alicia Lock",
    ownerOffice: "Lyon",
    description:
      "We want to developp an inclusive tool that will analyse and give headlines to a project to check the adaptability of it.",
    tags: ["developpement", "web", "dev", "ruby", "php", "backend"],
    startDate: "12/05/2022",
    image: "",
  },
  {
    id: 6,
    projectName: "SEO Adapter",
    owner: "Grace Fiddle",
    ownerOffice: "Montreal",
    description:
      "The SEO adapter project has the aim to give ideas and generate a list of tags according to a website and its targeted market.",
    tags: ["marketing", "digital", "seo", "python", "AI", "bigdata"],
    startDate: "29/02/2022",
    image: "",
  },
  {
    id: 7,
    projectName: "Marketplace Toolbox",
    owner: "Sebastian Tempelmann",
    ownerOffice: "Munich",
    description:
      "The idea is to create a model that can be used to applications that requires online payment platforms.",
    tags: ["developpement", "web", "dev", "javascript", "php"],
    startDate: "07/02/2022",
    image: "",
  },
  {
    id: 8,
    projectName: "Aiming for the Stars",
    owner: "Kate Armstrong",
    ownerOffice: "Brest",
    description:
      "Ever had the head in the stars ? The project here is to analyse datas from the space industry to prepare for future cases.",
    tags: [
      "data",
      "analysis",
      "space",
      "python",
      "bigdata",
      "machine learning",
    ],
    startDate: "09/11/2021",
    image: "",
  },
  {
    id: 9,
    projectName: "Apside Got Talent",
    owner: "Arthur Berg",
    ownerOffice: "Aix-en-Provence",
    description:
      "The idea is to developp a challenge tool that would give apsiders the opportunity to show innovative and creative ideas.",
    tags: ["developpement", "web", "dev", "javascript", "innovation"],
    startDate: "23/01/2022",
    image: "",
  },
  {
    id: 10,
    projectName: "Project Sanchez",
    owner: "Marty Marie",
    ownerOffice: "Nantes",
    description:
      "The project Sanchez is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "03/11/2021",
    image: "",
  },
  {
    id: 11,
    projectName: "Project !Undefined",
    owner: "Severine Marie ",
    ownerOffice: "Nantes",
    description:
      "The project Undefined is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "03/11/2024",
    image: "",
  },
  {
    id: 12,
    projectName: "Blockchain",
    owner: "Pascal Belg ",
    ownerOffice: "Nantes",
    description:
      "The project Blockchain is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "17/8/2024",
    image: "",
  },
  {
    id: 13,
    projectName: "Innovation Challenge!",
    owner: "Pascal Belg ",
    ownerOffice: "Nantes",
    description:
      "The project Undefind is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "17/8/2024",
    image: "",
  },
  {
    id: 14,
    projectName: "Express Train",
    owner: "Pascal Belg ",
    ownerOffice: "Nantes",
    description:
      "The project Undefind is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "17/8/2024",
    image: "",
  },
  {
    id: 15,
    projectName: "CyberWarriors",
    owner: "Pascal Belg ",
    ownerOffice: "Nantes",
    description:
      "The project Undefind is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "17/8/2024",
    image: "",
  },
  {
    id: 16,
    projectName: "Be API",
    owner: "Pascal Belg ",
    ownerOffice: "Nantes",
    description:
      "The project Undefind is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "17/8/2024",
    image: "",
  },
  {
    id: 17,
    projectName: "SpaceTech",
    owner: "Pascal Belg ",
    ownerOffice: "Nantes",
    description:
      "The project Undefind is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "17/8/2024",
    image: "",
  },
  {
    id: 18,
    projectName: "Trading template",
    owner: "Pascal Belg ",
    ownerOffice: "Nantes",
    description:
      "The project Undefind is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "17/8/2024",
    image: "",
  },
  {
    id: 19,
    projectName: "The Project D",
    owner: "Pascal Belg ",
    ownerOffice: "Nantes",
    description:
      "The project Undefind is about creating an internal tool that will allow a better communication between different offices.",
    tags: ["developpement", "web", "dev", "javascript", "php", "Saas"],
    startDate: "17/8/2024",
    image: "",
  },
];

export default ProjectsList;
