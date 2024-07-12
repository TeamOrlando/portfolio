import ScrollAnimation from "./scrollAnimation";

const About = () => {
  return (
    <ScrollAnimation>
      <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-center">
          Hello! I'm Loretta, a passionate and motivated Junior Front-End Developer. I specialize in creating responsive, user-friendly web applications using the latest technologies. I am eager to contribute to innovative projects and continuously improve my skills. When I'm not coding, I enjoy painting, hiking, and exploring new technologies. I believe in the power of teamwork and am always ready to take on new challenges.
        </p>
      </section>
    </ScrollAnimation>
  );
};
  
export default About