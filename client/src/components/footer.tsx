import {
  FaInstagram,
  FaPhone,
  FaSquareXTwitter,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-primary text-white p-4">
      <div className="w-full flex justify-end items-end">
        <div className="w-64 text-sm flex justify-around items-center">
          <div>
            <p className="p-0 m-0">Home</p>
            <p className="p-0 m-0">About us</p>
            <p className="p-0 m-0">donate</p>
            <p className="p-0 m-0 ">Contact us</p>
          </div>

          <div className="">
            <p className="p-0 m-0 flex justify-around items-center">
              <FaPhone className="size-4" />
              092 268 1232
            </p>
            <p className="p-0 m-0 flex justify-around items-center">
              <FaInstagram className="size-4" />
              Instagram
            </p>
            <p className="p-0 m-0 flex justify-around items-center">
              <FaSquareXTwitter className="size-4" />
              Twitter
            </p>
            <p className="p-0 m-0 flex justify-around items-center">
              <FaYoutube className="size-4" />
              Twitter
            </p>
          </div>
        </div>
      </div>

      <p className="p-0 m-0">
        © {new Date().getFullYear()} I am Tawfik. All rights reserved. Powered
        by Izar.
      </p>
    </footer>
  );
};

export default Footer;
