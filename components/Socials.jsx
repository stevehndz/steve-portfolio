import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/stevehndz" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/bsrh/" },
  { icon: <FaDribbble />, path: "https://dribbble.com/stevehndz" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
