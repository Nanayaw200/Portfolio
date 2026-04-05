import project1 from "../assets/videos/ChurchRec.mp4";
import project2 from "../assets/videos/QDoc.mp4";
import project3 from "../assets/videos/AndamoRec.mp4";
import project4 from "../assets/images/projects/Andamo.png";

const projects = [
  {
    id: 1,
    slug: "church-management-system",
    title: "Church Management System",
    category: "Community Platform",
    description:
      "A church administration and engagement platform for managing attendance, announcements, recaps, records, and communication.",
    media: project1,
    type: "video",
    tags: ["React", "Dashboard"],
    layout: "featured-wide",
    overview:
      "The Church Management System is designed to help churches manage administration and member engagement in one structured digital platform.",
    challenge:
      "Many churches still rely on scattered records, WhatsApp groups, and manual administration, making communication and engagement difficult to manage efficiently.",
    solution:
      "This system centralizes attendance, member data, announcements, recaps, and communication tools into one organized web and mobile-friendly experience.",
    role: "Frontend Development, Product Structuring, System Design",
    tools: ["React", "Dashboard UI", "Component Architecture"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    slug: "quickdoctor-app",
    title: "QuickDoctor App",
    category: "HealthTech",
    description:
      "A telemedicine and health management platform focused on access to care, consultations, and digital health workflows.",
    media: project2,
    type: "video",
    tags: ["Dashboard", "React", "Node.js", "MongoDB"],
    layout: "featured-tall",
    overview:
      "QuickDoctor is a digital health product built around telemedicine, appointment booking, and streamlined healthcare access.",
    challenge:
      "Patients often struggle with fragmented healthcare experiences, especially when consultations, appointments, and health records are separated across different systems.",
    solution:
      "QuickDoctor brings consultations, digital access, and healthcare workflows into one product experience that is easier for patients and providers to use.",
    role: "Frontend Planning, Product Design Direction, Feature Structuring",
    tools: ["React", "Node.js", "MongoDB", "Health UX"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    slug: "andamo-express",
    title: "Andamo Express",
    category: "Ecommerce",
    description:
      "An on-demand delivery and logistics platform designed to support fast ordering, tracking, and service coordination.",
    media: project3,
    type: "video",
    tags: ["Ecommerce"],
    layout: "small-card",
    overview:
      "Andamo Express is a delivery and logistics concept focused on on-demand service, smoother ordering, and better digital coordination.",
    challenge:
      "Customers and delivery businesses need faster, clearer, and more organized ways to request, track, and manage delivery services.",
    solution:
      "The platform provides a more modern logistics experience with digital coordination, user-friendly ordering flows, and improved service visibility.",
    role: "Product Planning, Frontend Direction, UX Structuring",
    tools: ["React", "Ecommerce UX", "Logistics Workflow Design"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    slug: "novasphere-digital-skills-hub",
    title: "NovaSphere Digital Skills Hub",
    category: "EdTech",
    description:
      "An online learning and mentorship platform focused on digital skills training, guided growth, and accessible education.",
    media: project4,
    type: "image",
    tags: ["EdTech"],
    layout: "small-card-side",
    overview:
      "NovaSphere Digital Skills Hub is designed to support learning, mentorship, and practical digital skills development through a structured online platform.",
    challenge:
      "Many learners need more accessible, practical, and guided pathways into digital skills, especially in environments where mentorship and structured growth are limited.",
    solution:
      "The platform combines learning resources, digital skills pathways, and mentorship support into one experience built for growth and accessibility.",
    role: "Product Vision, Platform Structuring, Frontend Planning",
    tools: ["React", "EdTech Product Design", "Learning Platform Strategy"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default projects;