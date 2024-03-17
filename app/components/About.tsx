const About = () => {
  return (
    <div className="flex items-center justify-center py-8 md:py-0 md:h-screen">
      <div className="flex flex-col w-4/5 gap-3 md:gap-6">
        <div className="text-yellowGreen text-4xl md:text-6xl font-semibold">
          About Me
        </div>
        <div className="text-xl md:text-3xl font-medium text-stone-300">
          A passionate{" "}
          <span className="text-neonGreen">Full stack developer</span> currently
          in my 3rd year of pursuing a Computer Science Degree at SRM
          University. While I began my journey focusing on Frontend development,
          my interests have since shifted towards{" "}
          <span className="text-neonGreen">Backend </span>development, where I
          find myself thriving.
          <br />
          <br />I have a strong command of the {""}
          <span className="text-neonGreen">MERN</span> stack, allowing me to
          create dynamic and efficient web applications. From simple landing
          pages to intricate dashboards, I&apos;ve had the opportunity to work
          on a variety of projects that have honed my skills and expanded my
          capabilities. <br />
          <br /> Beyond my academic pursuits, I&apos;ve been actively involved
          in various college clubs, where I&apos;ve collaborated with others and{" "}
          {""}
          <span className="text-neonGreen">contributed</span> to the community.
          These experiences have not only enriched my personal growth but have
          also taught me the value of teamwork and communication in achieving
          common goals. <br />
          <br /> I am excited about the endless possibilities in the world of
          technology and look forward to leveraging my skills and knowledge to
          create innovative solutions that make a difference.
        </div>
      </div>
    </div>
  );
};

export default About;
