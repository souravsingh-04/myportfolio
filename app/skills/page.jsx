"use client";

import { BsArrowDownRight} from "react-icons/bs";
import Link  from "next/link";

const skills = [
     {
    num: "01",
    title: "Java Backend Development",
    description:
      "Developing scalable REST APIs and server-side applications using Java, Spring Boot, MySQL, and Hibernate.",
    href: "",
  },
     {
    num: "02",
    title: "Web Development",
    description:
      "Building responsive and interactive websites using React, Next.js, Tailwind CSS, and modern front-end frameworks.",
    href: "",
  },
  {
    num: "03",
    title: "Cloud & Deployment",
    description:
      "Learning cloud fundamentals and deploying projects using Docker, Render, Vercel, and exploring AWS services.",
    href: "",
  },
    
];

import {motion} from "framer-motion";
const Skills =() => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{opacity: 0}}
                    animate = {{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
            {skills.map((skills, index) =>{
                return (
                    <div key={index}
                        className="flex-1 flex flex-col justify-center gap-6 group"
                    >
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline
                            text-transparent group-hover:text-outline-hover transition-all
                            duration-500">
                            {skills.num}</div>
                            <Link 
                            href={skills.href}
                            className="w-[70px] h-[70px] rounded-full bg-white
                            group-hover:bg-accent transition-all duration-500 flex
                            justify-center items-center hover:-rotate-45"
                            >
                                <BsArrowDownRight  className="text-primary text-3xl"/>
                            </Link>
                        </div>
                        {/* { title} */}
                        <h2 className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500">
                            {skills.title}
                            </h2>
                        {/* {description} */ }
                        <p className="text-white/60">{skills.description}</p>
                        {/* {border} */}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                );
            })}

            </motion.div>
            </div>
        </section>        
    );
};

export default Skills