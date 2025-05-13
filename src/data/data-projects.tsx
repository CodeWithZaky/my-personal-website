import { Github, Globe } from "lucide-react";
import BarokahElectric from "../../public/assets/barokah-electric.png";
import Catatanku from "../../public/assets/catatanku.png";
import Gedongarum from "../../public/assets/gedongarum.png";
import MatrixCalculator from "../../public/assets/matrix-calculator.png";
import MyPortfolioV1 from "../../public/assets/my-portfolio-v1.png";
import NumberConverter from "../../public/assets/number-converter.png";
import MyPortfolioV2 from "../../public/assets/portfolio-v2.jpg";

export const projects = [
  {
    id: 1,
    title: "My Personal Website v1",
    dates: "Apr 2023 - Sep 2023",
    category: { title: "Personal Project", note: "Portfolio" },
    description:
      "A personal website that showcases who I am, especially my journey and expertise in the field of technology.",
    technologies: ["Next.js", "Tailwind CSS"],
    links: [
      {
        type: "Website",
        icon: <Globe width={20} />,
        href: "https://zaky.vercel.app",
      },
      {
        type: "Github",
        icon: <Github width={20} />,
        href: "https://github.com/CodeWithZaky/my-personal-website-1",
      },
    ],
    image: MyPortfolioV1,
  },
  {
    id: 2,
    title: "Number Converter",
    dates: "Feb 2023 - Jul 2023",
    category: { title: "College Project", note: "2nd Semester" },
    description:
      "A simple yet functional application for converting numbers between decimal, binary, octal, and hexadecimal formats. Built as part of a college project.",
    technologies: ["Next.js", "Tailwind CSS", "DaisyUI", "SweetAlert2"],
    links: [
      {
        type: "Website",
        icon: <Globe width={20} />,
        href: "https://number-converter-2.vercel.app",
      },
      {
        type: "Github",
        icon: <Github width={20} />,
        href: "https://github.com/CodeWithZaky/number-converter",
      },
    ],
    image: NumberConverter,
  },
  {
    id: 3,
    title: "Matrix Calculator",
    dates: "Feb 2023 - Jul 2023",
    category: { title: "College Project", note: "2nd Semester" },
    description:
      "An interactive app to perform addition, subtraction, and multiplication of two matrices. Designed as part of my coursework.",
    technologies: ["Next.js", "Tailwind CSS", "DaisyUI", "SweetAlert2"],
    links: [
      {
        type: "Website",
        icon: <Globe width={20} />,
        href: "https://matrixcalculator.vercel.app",
      },
      {
        type: "Github",
        icon: <Github width={20} />,
        href: "https://github.com/CodeWithZaky/matrix-calculator",
      },
    ],
    image: MatrixCalculator,
  },
  {
    id: 4,
    title: "My Personal Website",
    dates: "Mar 2024 - Apr 2024",
    category: { title: "Personal Project", note: "Portfolio" },
    description:
      "Develop a personal website to showcase travel, skills and projects in the field technology.",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN UI"],
    links: [
      {
        type: "Website",
        icon: <Globe width={20} />,
        href: "https://codewithzaky.vercel.app",
      },
      {
        type: "Github",
        icon: <Github width={20} />,
        href: "https://github.com/CodeWithZaky/my-personal-website",
      },
    ],
    image: MyPortfolioV2,
  },
  {
    id: 5,
    title: "Gedongarum",
    dates: "Feb 2024 - Jul 2024",
    category: { title: "College Project", note: "4th Semester" },
    description:
      "A website developed to provide information about my hometown village, created as part of a college project.",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN UI", "Swiper Js"],
    links: [
      {
        type: "Website",
        icon: <Globe width={20} />,
        href: "https://gedongarum.vercel.app/",
      },
      {
        type: "Github",
        icon: <Github width={20} />,
        href: "https://github.com/CodeWithZaky/informasi-gedongarum",
      },
    ],
    image: Gedongarum,
  },
  {
    id: 6,
    title: "Catatanku",
    dates: "Nov 2024 - Dec 2024",
    category: { title: "College Project", note: "5th Semester" },
    description:
      "An application built for my final project in the Web Programming 2 course. It allows users to register, log in, and manage personal notes.",
    technologies: [
      "Next.js",
      "ShadCN UI",
      "tRPC",
      "Prisma ORM",
      "Supabase",
      "PostgreSQL",
      "T3 Stack",
    ],
    links: [
      {
        type: "Website",
        icon: <Globe width={20} />,
        href: "https://catatankuuu.vercel.app",
      },
      {
        type: "Github",
        icon: <Github width={20} />,
        href: "https://github.com/CodeWithZaky/catatanku",
      },
    ],
    image: Catatanku,
  },
  {
    id: 7,
    title: "Barokah Electric",
    dates: "Nov 2024 - Dec 2024",
    category: { title: "College Project", note: "5th Semester" },
    description:
      "This project is part of my final assignment for the E-commerce course in the 5th semester. It focuses on building an e-commerce platform for Barokah Electric.",
    technologies: [
      "Next.js",
      "ShadCN UI",
      "Zustand",
      "tRPC",
      "Prisma ORM",
      "PostgreSQL",
      "Uploadthing",
      "T3 Stack",
    ],
    links: [
      {
        type: "Github",
        icon: <Github width={20} />,
        href: "https://github.com/CodeWithZaky/barokah-electric",
      },
    ],
    image: BarokahElectric,
  },
];
