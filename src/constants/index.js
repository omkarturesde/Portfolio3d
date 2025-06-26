import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Maintenance Engineer Intern",
    company_name: "Aariha Enterprise Pvt Ltd",
    icon: "https://content.jdmagicbox.com/comp/ahmedabad/g7/079pxx79.xx79.180524132939.z8g7/catalogue/aariha-enterprise-private-limited-usmanpura-ahmedabad-computer-hardware-manufacturers-it3vl-250.jpg", // replace with the actual icon you have
    iconBg: "#F3F4F6",
    date: "July 2024 - August 2024",
    points: [
      "Maintained and updated the frontend of the aeplbasket.com e-commerce website using React.js.",
      "Developed and modified the ProductCard React component based on live stock inventory updates.",
      "Built a TODO app using React and MongoDB to understand React DOM and data fetching via fetch().",
      "Collaborated with backend engineers to ensure accurate and timely product updates on the site.",
      "Gained practical experience with version control (Git), React component development, and web performance optimization.",
    ],
  },
  {
    title: "Associate Consultant Intern",
    company_name: "Utrecht IT Consulting",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfSvDiUKCQLP829z0T33Q-J134WsLrhdqfg&s", // replace with the actual icon you have
    iconBg: "#E6DEDD",
    date: "January 2025 - Present",
    points: [
      "Worked on Solace PubSub+ for event-driven messaging and real-time data streaming across distributed systems.",
      "Designed and implemented message flows to integrate multiple applications using Solace.",
      "Developed a Flutter-based bus tracking app using Solace messaging for live bus location updates.",
      "Managed event-driven architecture to enable seamless communication between microservices.",
      "Ensured reliability, scalability, and efficiency of real-time data transmission pipelines.",
    ],
  }
];



const projects = [
  {
  name: "Uber Rides MERN App",
  description:
    "A full-stack ride-booking platform with user and captain authentication, ride management, and Google Maps integration for distance and fare estimation.",
  tags: [
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "expressjs",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "reactjs",
      color: "pink-text-gradient",
    },
    {
      name: "googlemapsapi",
      color: "blue-text-gradient",
    },
  ],
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/306205889/JF/MS/FA/6623185/uber-clone.jpeg', // import your project screenshot as 'uberrides'
  source_code_link: "https://github.com/omkarturesde/Uber", // replace with actual repo
  },
  {
  name: "Fetal Anomaly Detection",
  description:
    "A deep learning web application that classifies fetal ultrasound images as normal or abnormal using CNN and transfer learning with VGG19.",
  tags: [
    {
      name: "cnn",
      color: "green-text-gradient",
    },
    {
      name: "tensorflow",
      color: "blue-text-gradient",
    },
    {
      name: "keras",
      color: "pink-text-gradient",
    },
    {
      name: "flask",
      color: "blue-text-gradient",
    },
    {
      name: "transferlearning",
      color: "green-text-gradient",
    },
  ],
  image: "https://i.postimg.cc/MH2tS8MR/Screenshot-2024-05-25-162305.png", // import your project screenshot as 'fetalcnn'
  source_code_link: "https://github.com/omkarturesde/Fetal_anomalies_detection2", // replace with actual repo
}
,
  {
  name: "Disease Prediction System",
  description:
    "A Flask web application that predicts diseases from symptoms using a trained SVC model, offering health insights like medications, precautions, and diet.",
  tags: [
    {
      name: "flask",
      color: "blue-text-gradient",
    },
    {
      name: "machinelearning",
      color: "green-text-gradient",
    },
    {
      name: "ec2",
      color: "pink-text-gradient",
    },
  ],
  image: "https://i.postimg.cc/9FXyKBJJ/Screenshot-2024-06-05-142303.png", // make sure to import and use the correct image
  source_code_link: "https://github.com/PrasadPatil29/Medicine-Recommendation-System-Rule-base" // replace with your actual GitHub repo URL
}

];

export { services, technologies, experiences, projects };
