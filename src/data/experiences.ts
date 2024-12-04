import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Senior Experience Engineer",
    company: "Publicis Sapient",
    startDate: "Dec 2023",
    isCurrentJob: true,
    location: "Bangalore, India",
    description: [
      "Currently working on the UHG PBM Core Modernization web application, utilizing a tech stack that includes React, Vite, Tailwind CSS, and TypeScript.",
      "Implementing Micro Frontend architecture, leveraging Fetch API, Skyline Web Components, ESLint, and Material UI (MUI) for responsive, scalable front-end development.",
      "Building and deploying the middleware using Node.js, with components rendered via the middleware repository.",
      "Developing Java 17-based microservices on the back-end, using OpenAPI (YAML) for API specifications and MongoDB for document management.",
      "Services are deployed to Azure AKS, with the middleware hosted on the Azure portal for web applications.",
      "Micro Frontend components are published, released, and served through a CDN for optimized performance and scalability.",
      "Focused on addressing security vulnerabilities across services, improving code quality, and resolving SonarQube issues.",
      "Writing and maintaining unit tests for both back-end (Java JUnit) and front-end (React Jest) components to ensure high code coverage and reliability."
    ],
    projectName: "UHG - United Health Group(Optum) - PBM Core Claim Modernization"
  },
  {
    designation: "Senior Software Engineer",
    company: "IBS Software",
    startDate: "OCT 2021",
    endDate: "DEC 2023",
    isCurrentJob: false,
    location: "Bangalore, India",
    description: [
      "Developed a web application that processed, analyzed, and visually rendered data.",
      "Led requirements gathering and validation sessions to collaborate on the web app's UI/UX design, ensuring key user interface aspects were addressed before the development phase.",
      "Extensive experience in building web pages using HTML, SCSS, JavaScript, React.js, Recoil, and Apollo GraphQL.",
      "Strong expertise in implementing Object-Oriented Design Patterns, specifically the Model-View-Controller (MVC) pattern.",
      "Proficient in working with GraphQL queries and mutations, leveraging the Apollo GraphQL library for data management.",
      "Experienced in managing application-level state with Recoil architecture.",
      "Utilized advanced React features, including code splitting, lazy loading, pagination, higher-order components, hooks, error handling, and React Router.",
      "Expertise in React Module Federation, Micro Frontend with Webpack 5, and the NEO UI Framework.",
      "Experience with Jenkins and SonarQube for continuous integration and quality assurance, resolving code smells and maintaining a 95% code coverage.",
      "Hands-on experience with NPM for package management and dependency installation.",
      "Proficient in using GitHub and Bitbucket with conventional workflows, including release tags and pull requests (PRs).",
      "Conducted regression testing using the Jest framework, making assertions and ensuring code quality, with additional experience using ESLint for code linting."
    ],
    projectName: "Icargo Neo Customs"
  },
  {
    designation: "Associate Software Engineer",
    company: "ADOL Technologies Pvt Ltd",
    startDate: "Aug 2019",
    endDate: "Oct 2021",
    isCurrentJob: false,
    location: "Coimbatore, India",
    description: [
      "Developed full-stack web applications (SAAS) that processed, analyzed, and visually rendered data.",
      "Ensured application security and facilitated seamless interactions with multiple APIs and databases.",
      "Designed and implemented APIs using Node.js, Express.js, PostgreSQL, and Objection.js.",
      "Skilled in building web pages with HTML5, CSS3, MVC architecture, Object-Oriented JavaScript, ES6, AJAX, JSON, and XML.",
      "Strong understanding of the Document Object Model (DOM) and DOM manipulation techniques.",
      "Designed and developed a knowledge management platform based on a knowledge graph, using technologies like React, Redux, ApexCharts, and Material UI.",
      "Hands-on experience with React components, forms, event handling, keys, routing, and animations.",
      "Expertise in creating user validation forms and leveraging RESTful APIs for data transmission to the server.",
      "Developed a Merchant-side mobile application for both Android and iOS platforms using the Ionic v4 framework (Cordova), with Angular 8, TypeScript, JavaScript, and REST APIs.",
      "Created custom plugins to bridge the functionality between Ionic and native Android features.",
      "Implemented a native Ionic plugin for barcode scanning, enabling coupon scanning in the mobile app and boosting user productivity by up to 90%.",
      "Uploaded and published the app on the Google Play Store (App Name: Great Deals Merchant App).",
      "Developed a Progressive Web App (PWA) for the customer-side mobile application, using Vue Storefront and Vue.js integrated with Magento 2."
    ],
    projectName: "Hoursheets.com"
  },
];

export default experiences;
