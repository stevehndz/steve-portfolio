import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo  */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Steve<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop navbar and hire me button */}
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Mobile navbar */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
