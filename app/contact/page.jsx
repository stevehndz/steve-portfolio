"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+503) 71010773",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "steve.r.hndz@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Usulután, Usulután, El Salvador",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  // setvalues from contact form
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  // send email message method
  const handleSendEmail = () => {
    const email = "steve.r.hndz@gmail.com"; // your email here
    // your precharged message here
    const messageLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
      "Hello I am " +
        name +
        " " +
        lastname +
        ".\n" +
        message +
        "\nPhone number: " +
        phone
    )}`;
    window.open(messageLink, "_blank"); // open message app
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* form */}
          <div className="lg:h-[54%] order-2 lg:order-none">
            <form
              onSubmit={handleSendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Work together</h3>
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First Name"
                  value={name}
                  id="name"
                  onChange={(event) => setName(event.target.value)}
                />
                <Input
                  type="lastname"
                  placeholder="Last Name"
                  value={lastname}
                  id="lastname"
                  onChange={(event) => setLastname(event.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  value={phone}
                  id="phone"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              {/* select */}
              <Select
                defaultValue={subject}
                id="subject"
                onChange={(event) => setSubject(event.target.value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ux">UX/UI Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea message */}
              <Textarea
                className="h-[90px]"
                placeholder="Type your message here."
                value={message}
                id="message"
                onChange={(event) => setMessage(event.target.value)}
              />
              <Button size="md" type="submit" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg lg:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
