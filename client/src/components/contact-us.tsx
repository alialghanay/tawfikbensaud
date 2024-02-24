import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section className="container flex flex-col items-center">
      <h1 className="text-primary font-bold text-4xl">our Paltform</h1>
      <div className="flex justify-between">
        <FaInstagram className="size-16" />
        <FaLinkedin className="size-16 ml-5" />
        <FaSquareFacebook className="size-16 ml-5" />
      </div>
    </section>
  );
};

export default ContactUs;
