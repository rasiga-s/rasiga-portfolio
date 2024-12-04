import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/recoil.svg",
      "/skills/react.svg",
      "/skills/html.svg",
      "/skills/microfrontend.svg",
      "/skills/css.svg"
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I create visually appealing, user-friendly websites that establish a powerful online presence. Additionally, I specialize in developing web-based applications. By leveraging the latest frameworks and technologies, I deliver tailored solutions that ensure a smooth, responsive, and SEO-optimized user experience.",
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/express.svg",
      "/skills/graphql.svg",
      "/skills/nodejs.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/java.svg",
      "/skills/microservices.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I strengthen digital applications by building robust, scalable backend infrastructures. I design efficient database structures, develop APIs, and configure servers to optimize performance, security, and scalability. This ensures your applications can seamlessly manage high traffic and complex data. Count on reliable backend solutions for long-term success"
  },
  {
    id: 3,
    title: "Mobile App Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/reactnative.svg",
      "/skills/javascript.svg",
      "/skills/typescript.svg",
      "/skills/css.svg"
    ],
    shortDescription:
      "I create high-performance mobile apps for iOS and Android, ensuring seamless functionality, intuitive design, and alignment with your business goals for an exceptional user experience.",
    description:
      "I design and develop engaging mobile apps for iOS and Android, taking them from concept to deployment. By leveraging the latest technologies, I ensure smooth performance, user-friendly interfaces, and powerful functionality that align with your business objectives. Delivering an exceptional user experience and impressive results every time.",
  },
  {
    id: 4,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/skills/jira.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png"
    ],
    shortDescription:
      "I set goals, identify target audiences, and map out a clear path to success.",
    description:
      "I  work closely with you to establish clear goals, define target audiences, and create a strategic roadmap for success. With expertise in product ideation and market analysis, I ensure your product meets user needs and aligns with your business strategy, driving long-term growth and unlocking its full potential.",
  },
  {
    id: 5,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/ngnix.svg",
      "/skills/kubernetes.svg",
      "/skills/jenkins.svg",
      "/skills/kafka.svg"
    ],
    shortDescription: "I optimize development and operations workflows.",
    description:
    "I optimize development and operations workflows by implementing effective DevOps practices. I set up continuous integration and deployment pipelines, manage cloud infrastructure, and utilize containerization to ensure efficient, reliable, and scalable software delivery. Enhance your workflow with streamlined DevOps solutions."
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I oversee and enhance your database systems",
    description:
      " oversee and optimize your database systems to ensure top performance, reliability, and scalability. With expertise in both SQL and NoSQL databases, I design efficient schemas, write complex queries, and apply best practices for data integrity and security. Ensure your data is managed with maximum efficiency and reliability.",
  },
];

export default services;
