import Marquee from "react-fast-marquee";
import { skills } from "./helper/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full flex justify-center items-center py-28">
      <div className="flex flex-col w-4/5 gap-6">
        <div className="text-secondary text-4xl md:text-6xl font-semibold">
          Skills
        </div>
        <div className="flex flex-col justify-center gap-8">
          {skills.map((skill, idx) => (
            <div
              className="flex flex-col justify-center gap-3 md:gap-6"
              key={idx}
            >
              <div className="text-primary text-xl md:text-3xl font-medium">
                {skill.section}
              </div>
              <Marquee
                direction={idx % 2 == 0 ? "left" : "right"}
                className="py-6"
              >
                {skill.skills.map((skill) => (
                  <div className="grid place-items-center" key={skill}>
                    <div className="relative w-20 md:mx-20 mx-10 h-20">
                      <Image src={`/skills/${skill}.svg`} alt={skill} fill />
                    </div>
                    <span className="text-xl font-light text-center mt-2 text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
