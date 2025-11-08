"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "souravsingh8885@gmail.com",
    link: "mailto:souravsingh8885@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bulandshahr, Uttar Pradesh, India (Pin-203001)",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 xl:py-0 min-h-[80vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] items-center xl:items-start">
          
          {/* Left Column - Contact Links */}
          <div className="xl:w-[55%] order-2 xl:order-none flex flex-col gap-8 p-10 bg-[#27272c] rounded-xl">
            <div>
              <h2 className="text-4xl font-bold text-accent mb-4">Let’s work together</h2>
              <p className="text-white/60">
                I’m always open to collaborating on innovative projects or exploring job opportunities abroad. 
                Feel free to reach out through any of the links below.
              </p>
            </div>

            <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-4">
              <a
                href="mailto:souravsingh8885@gmail.com"
                className="bg-[#1f1f23] hover:bg-accent hover:text-primary px-6 py-3 rounded-xl flex items-center gap-3 transition-all"
              >
                <FaEnvelope className="text-xl" /> Email Me
              </a>

              <a
                href="https://linkedin.com/in/sourav-singh"
                target="_blank"
                className="bg-[#1f1f23] hover:bg-accent hover:text-primary px-6 py-3 rounded-xl flex items-center gap-3 transition-all"
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </a>

              <a
                href="https://github.com/souravsingh"
                target="_blank"
                className="bg-[#1f1f23] hover:bg-accent hover:text-primary px-6 py-3 rounded-xl flex items-center gap-3 transition-all"
              >
                <FaGithub className="text-xl" /> GitHub
              </a>

              <a
                href="/assets/Sourav_Singh_Resume.pdf"
                download
                className="bg-[#1f1f23] hover:bg-accent hover:text-primary px-6 py-3 rounded-xl flex items-center gap-3 transition-all"
              >
                <FaFileDownload className="text-xl" /> Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Info Section */}
          <div className="flex-1 flex flex-col justify-center items-center xl:items-end gap-10 order-1 xl:order-none">
            <ul className="flex flex-col gap-10 w-full max-w-md">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 bg-[#27272c] p-5 rounded-xl">
                  <div className="w-[60px] h-[60px] bg-[#1f1f23] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="text-white/60">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-xl hover:text-accent transition-all"
                      >
                        {item.description}
                      </a>
                    ) : (
                      <h3 className="text-xl">{item.description}</h3>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
