"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiJson,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Steve Rodas",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Salvadorean",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+503) 71010773",
    },
    {
      fieldName: "Email",
      fieldValue: "steve.r.hndz@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years",
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

// experience data
const experience = {
  icon: "/public/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis",
  items: [
    {
      company: "Gloria's Logistics.",
      position: "Logo Designer",
      duration: "Sept 2022 - Aug 2022",
    },
    {
      company: "Universidad Nacional de El Salvador.",
      position: "Intership IT Area",
      duration: "May 2021 - Feb 2022",
    },
  ],
};

// education data
const education = {
  icon: "/public/assets/resume/badge.svg",
  title: "My Education",
  description:
    "quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis",
  items: [
    {
      company: "Universidad Nacional de El Salvador.",
      degree: "Computer Systems Engineering.",
      duration: "Feb 2018 - May 2024",
    },
    {
      company: "SoloLearn.",
      degree: "Javascript Intermediate.",
      duration: "May 2024 - June 2024",
    },
    {
      company: "Udemy.",
      degree: "Next.js Apps with Tailwind CSS.",
      duration: "May 2024 - May 2024",
    },
    {
      company: "Udemy.",
      degree: "Angular y Spring Boot.",
      duration: "Apr 2024 - May 2024",
    },
    {
      company: "Udemy.",
      degree: "MERN Stack - Blog App.",
      duration: "Mar 2024 - Apr 2024",
    },
    {
      company: "Udemy.",
      degree: "Just Enough Laravel PHP.",
      duration: "Feb 2024 - Mar 2024",
    },
    {
      company: "Udemy.",
      degree: "React y Spring MVC.",
      duration: "Jan 2024 - Feb 2024",
    },
    {
      company: "Udemy.",
      degree: "JavaFx, Swing, Spring Boot y MySql.",
      duration: "Jan 2024 - Jan 2024",
    },
    {
      company: "Udemy.",
      degree: "Figma to WordPress.",
      duration: "Dec 2023 - Jan 2024",
    },
    {
      company: "Udemy.",
      degree: "Figma Design Course.",
      duration: "Nov 2023 - Dec 2023",
    },
    {
      company: "Ingles Corporativo.",
      degree: "Intermediate English.",
      duration: "Feb 2023 - Mar 2023",
    },
    {
      company: "Universidad Nacional de El Salvador.",
      degree: "React Native.",
      duration: "Apr 2019 - May 2019",
    },
    {
      company: "Universidad Nacional de El Salvador.",
      degree: "Java SE Development.",
      duration: "Sept 2018 - Oct 2018",
    },
    {
      company: "Universidad Nacional de El Salvador.",
      degree: "Computer Maintenance and Repair.",
      duration: "Feb 2018 - Apr 2018",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaAngular />,
      name: "Angular.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaJava />,
      name: "Java SE",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiJson />,
      name: "Json",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
  ],
};

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index}>
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        <div>
                          {/* more data */}
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
