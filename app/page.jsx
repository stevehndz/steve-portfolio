import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text */}
          <div className="text-center lg:text-left">
            <span className="text-xl">Computer Systems Engineer</span>
            <h1 className="h1 mb-6">
              Hello I am <br /> <span className="text-accent">Steve Rodas</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a systems engineer passionate about transforming ideas into
              elegant and functional code. I am fascinated by the world of
              software development and technological innovation.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
