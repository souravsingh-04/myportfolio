"use client";
import Link from "next/link";
import { SiCodeforces } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const socials = [
    { icon: <FaGithub />, path: "https://github.com/souravsingh-04"},
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/souravsingh04/"},
  { icon: <SiCodeforces />, path: "https://codeforces.com/profile/yourusername" },
];

const Social = ({containerStyles, iconStyles}) =>{
    return <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
        </div>;
};

export default Social;