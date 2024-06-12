"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    text: "Experience in university projects",
  },
  {
    num: 5,
    text: "Personal projects completed",
  },
  {
    num: 12,
    text: "Technologies mastered",
  },
  {
    num: 300,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {stats.map((item, index) => {
            return (
              <div key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
