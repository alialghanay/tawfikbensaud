import dynamic from "next/dynamic";

const Main = dynamic(() => import("./ui/about/main"), { ssr: false });
const TeamCarousel = dynamic(() => import("./ui/about/team"), { ssr: false });
const TeamLargeSecreens = dynamic(() => import("./ui/about/team-lg"), {
  ssr: false,
});
const AboutUs = () => {
  return (
    <section
      className="flex flex-col justify-start items-center overflow-hidden"
      id="about-us"
    >
      <Main />
      <TeamCarousel />
      <TeamLargeSecreens />
    </section>
  );
};

export default AboutUs;
