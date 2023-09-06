import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nextjs,
    mongodb,
    git,
    figma,
    threejs,
    spotify,
    chitrashala,
    quizzical,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "3D Developer",
      icon: creator,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const projects = [
    {
      name: "Spotify Clone",
      description:
        "A dynamic Spotify Clone app using Next.js with the app router structure, TailwindCSS, Supabase, PostgreSQL and Stripe. It seamlessly integrates vital components like user authentication, payment gateway, and audio player.",
      tags: [
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "supabase",
          color: "yellow-text-gradient",
        },
        {
          name: "stripe",
          color: "blue-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/Ashrita-Das/spotify-clone",
    },
    {
      name: "Chitrashala",
      description:
        "An art gallery website using Next.js and Typescript. The paintings are navigated through a slideshow and each painting is viewed in a lightbox. Depending on the screen size, the app is viewed in an optimal layout.",
      tags: [
        {
          name: "nextjs",
          color: "yellow-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "orange-text-gradient",
        },
      ],
      image: chitrashala,
      source_code_link: "https://github.com/Ashrita-Das/art-gallery",
    },
    {
      name: "Quizzical",
      description:
        "A simple Quiz app made using reactjs. This is the final solo project of the Scrimba Frontend Career Path Course. Questions are fetched from OpenDB using the fetchAPI.",
      tags: [
        {
          name: "react",
          color: "yellow-text-gradient",
        },
        {
          name: "fetchapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: quizzical,
      source_code_link: "https://github.com/Ashrita-Das/quiz-app",
    },
  ];
  
  export { services, technologies, projects };