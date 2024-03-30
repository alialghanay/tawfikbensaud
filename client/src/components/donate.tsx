import SectionOne from "./ui/donate/section-one";
import SectionTwo from "./ui/donate/section-two";

const Donate = () => {
  return (
    <div
      id="donate"
      className="w-full text-white font-cairo text-center bg-primary p-8"
    >
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Donate;
