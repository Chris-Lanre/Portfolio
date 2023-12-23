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
    Nike,
    carhub,
    web3,
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
      title: "Web Designer",
      icon: web,
    },
    {
      title: "3D Web Artist",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: web,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
  
  const experiences = [
    {
      title: "Web Development Enthusiast",
      company_name: "",
      
      iconBg: "#000",
      date: "Self-Employed | January 2021 - October 2021",
      points: [
        "Started with HTML and CSS.",
        "Built mini web apps and Sign-In Pages",
        "Achieved certification on FreeCode Camp.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
    {
      title: "Advancing Skills in Web Development and Design",
      company_name: "",
      icon: shopify,
      iconBg: "#000",
      date: "Self-Employed | October 2021 - November 2022",
      points: [
        "Started learning Javascript and Bootstrap.",
        "Built Javascript Web Apps and used Tailwind CSS for designs.",
       
        "Engaged with a diverse community of learners, venturing into other programming languages.",
      ],
    },
    {
      title: "Current Role as Web Developer & Designer",
      company_name: "",
      icon: meta,
      iconBg: "#000",
      date: "Self-Employed | November 2022 - Present",
      points: [
        
        " Exploring different programming languages and technologies .",
        "Developing and maintaining web applications using React.js.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Leading projects with Next.js and TypeScript for better development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chris exceeded our expectations, delivering web solutions that precisely matched our vision.",
      name: "Alex W.",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Chris' entrepreneurial spirit adds unique value, understanding both technical and business requirements.",
      name: "Mark L.",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Chris' coding skills are top-notch. He effortlessly tackles complex challenges, ensuring project success.",
      name: "Adeola James",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ezego Cars",
      description:
        "A website that allows Users to search,buy , book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Nexjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carhub,
      source_code_link: "https://github.com/Chris-Lanre/Car-hub",
    },
    {
      name: "Nike",
      description:
        "E-commerce platform that allows users to purchase from Nike store , It is embedded with a live image of the particular sneaker the user want to purchase",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Nike,
      source_code_link: "https://github.com/Chris-Lanre/Nike-Site",
    },
    {
      name: "KRYPT",
      description:
        "A comprehensive trading platform that allows users to buy , transfer , and store, coins and ETH curated recommendations for popular blockchains.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: web3,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };