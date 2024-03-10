import Main from "./ui/about/main";
import TeamCarousel from "./ui/about/team";
import TeamLargeSecreens from "./ui/about/team-lg";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-start items-center" id="about-us">
      <Main />
      <TeamCarousel />
      <TeamLargeSecreens />
    </section>
  );
};

export default AboutUs;
