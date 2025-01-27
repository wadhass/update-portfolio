import Typewriter from 'typewriter-effect';
import AHMED from "../assets/AHMED.jpg";
import ports from "../assets/ports.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contactme");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      id="home"
      className="relative flex flex-col lg:flex-row-reverse items-center h-[100vh] gap-6 px-5 md:px-8 lg:px-10 bg-cover bg-center bg-origin-padding text-black z-0"
      style={{ backgroundImage: `url(${ports})` }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900 z-[-1]"></div>

     
      <div className="w-full lg:w-1/3 flex justify-center z-10">
        <img
          src={AHMED}
          alt="AHMED"
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] 
          mt-20 md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-full shadow-lg"
        />
      </div>

   
      <div className="w-full lg:w-3/5 space-y-5 z-10 text-center lg:text-left px-2 sm:px-5">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-orange-500 drop-shadow-lg">
          <Typewriter
            options={{
              strings: ["Hi, I'm Ahmed", "Full-Stack Developer", "Creative Thinker"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg drop-shadow-md leading-relaxed">
          A passionate Frontend and Backend Developer who turns design ideas into functional and 
          interactive websites. My expertise includes HTML, CSS, JavaScript, React, and 
          Tailwind CSS. With a strong background in Figma prototyping, I focus on creating 
          pixel-perfect, responsive web applications that work seamlessly across all devices.
          I enjoy bridging the gap between design and development, ensuring every project I 
          work on delivers an excellent user experience. I’m always eager to learn and grow, 
          excited to contribute to innovative projects!
        </p>
        <button
          onClick={scrollToContact}
          className="bg-gray-900 border border-gray-400 text-white text-sm sm:text-base md:text-lg py-3 px-4 sm:py-2 
          sm:px-8 rounded-full hover:bg-gray-800 focus:ring-[2px] focus:ring-red-700 focus:ring-offset-[1px] outline-none"
        >
          Hire Me
        </button>
      </div>
    </main>
  );
};

export default Hero;
