import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section id="contact-us" className="container flex flex-col items-center">
      <h1 className="text-primary font-bold text-4xl mt-4">our Paltform</h1>
      <div className="flex justify-between items-center w-1/2 h-32">
        <FaLinkedin className="size-20" />
        <AiFillInstagram className="size-24" />
        <FaSquareFacebook className="size-20" />
      </div>
    </section>
  );
};

export default ContactUs;
