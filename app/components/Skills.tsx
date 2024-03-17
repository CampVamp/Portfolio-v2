import Marquee from "react-fast-marquee";
import { skills } from "./helper/data";

const Skills = () => {
  return (
    <div className="w-full flex justify-center items-center py-28">
      <div className="flex flex-col w-4/5 gap-6">
        <div className="text-yellowGreen text-6xl font-semibold">Skills</div>
        <div className="flex flex-col justify-center gap-8">
          {skills.map((skill, idx) => (
            <div className="flex flex-col justify-center gap-6">
              <div className="text-neonGreen text-3xl font-medium">
                {skill.section}
              </div>
              <Marquee
                direction={idx % 2 == 0 ? "left" : "right"}
                className="py-6"
              >
                {skill.skills.map((skill) => (
                  <div className="grid place-items-center" key={skill}>
                    <img
                      src={`/skills/${skill}.svg`}
                      alt={skill}
                      className="w-20 md:mx-20 mx-10 h-20"
                    />
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
