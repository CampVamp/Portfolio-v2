const Hero = () => {
  return (
    <div className="h-screen w-full flex items-center px-12">
      <div className="flex flex-col justify-center gap-8">
        <div className="text-9xl font-semibold text-[#04FC04] flex flex-col gap-4">
          <div>Hello</div>
          <div>My Name is</div>
          <div className="text-[#c4d4b4]">Ajay ram</div>
        </div>
        <div className="text-stone-500 text-3xl font-medium">
          Full Stack Developer
        </div>
      </div>
    </div>
  );
};

export default Hero;
