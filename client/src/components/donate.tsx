import dynamic from "next/dynamic";

const SectionOne = dynamic(() => import("./ui/donate/section-one"), {
  ssr: false,
});
const SectionTwo = dynamic(() => import("./ui/donate/section-two"), {
  ssr: false,
});
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
