import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "booking-react-frontend",
    title: "Booking App",
    description:
      "A booking application developed using React, MUI, axios.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rasiga-s/booking-react-frontend.git",
    tags: ["React", "MUI", "Axios", "CSS"],
  },
  {
    id: "booking-react-backend",
    title: "Booking App API",
    description:
      "A booking backend application developed using Node js, Express js, SQLite",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rasiga-s/booking-api.git",
    tags: ["Node js", "Express js", "SQLite"],
  },
  {
    id: "authentication-nodejs",
    title: "Authentication API",
    description:
      "A authentication RESTful API developed using Node.js, Express.js, and Postgresql to integrate backend and frontend with ease and encryption, and migration using knex.js",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rasiga-s/react-express-login-registration.git",
    tags: ["React", "Redux","Node.js", "Express.js", "PostgreSQl", "Objection.js", "knex.js"],
  },
  {
    id: "sales-reports",
    title: "Sales and Reports",
    description:
      "This repository contains the sales and reports mangaement developed using React, Redux, CSS, apexchart",
    icon: "/skills/chart.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rasiga-s/sales-report-react.git",
    tags: ["React.js", "Redux", "CSS", "Apexchart"],
  },
  {
    id: "drag-and-drop",
    title: "Darg and Drop App",
    description:
      "A Drag and Drop application developed using React and typescript, web-vitals, css.",
    icon: "/skills/typescript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rasiga-s/Drag-and-Drop-React-TypeScript.git",
    tags: ["React", "typeScript", "web-vitals", "css"],
  },
  {
    id: "comments-dashboard",
    title: "Comments and Dsahboard",
    description:
      "This repository contains the comments Management project developed using React, Redux, CSS",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rasiga-s/comment-dashboard.git",
    tags: ["React.js", "Redux", "CSS"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Next.js", "Sass", "Web Development"],
  }
];
export default projects;
