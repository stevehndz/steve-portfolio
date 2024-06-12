"use client";

import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    href: "/",
    description:
      "Web applications, Java, Javascript Frameworks, SQL/NoSQL and more. End-to-end solutions, from design to server side, with a focus on quality, security and scalability. ",
  },
  {
    num: "02",
    title: "UX/UI Design",
    href: "/",
    description:
      "Custom UX/UI design services for all types of digital projects, from web and mobile applications to websites and e-commerce platforms.",
  },
  {
    num: "03",
    title: "Media Design",
    href: "/",
    description: "Adobe Photoshop and Illustrator, creating visual pieces that are not only attractive, but also convey your message effectively.",
  },
  {
    num: "04",
    title: "API Development",
    href: "/",
    description: "Development of customized, secure and efficient APIs. REST, SOAP, system integration, security, documentation and support.",
  },
];

import { motion } from "framer-motion";
import Link from "next/link";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-4">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 group cursor-default"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowRight className="text-primary text-3xl cursor-pointer" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
