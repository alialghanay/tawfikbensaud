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
      <div className="w-full flex justify-end items-end mt-4">
        <div className="w-64 text-sm flex justify-around items-center">
          <div>
            <p className="p-0 m-0">Home</p>
            <p className="p-0 m-0">About us</p>
            <p className="p-0 m-0">donate</p>
            <p className="p-0 m-0 ">Contact us</p>
          </div>

          <div className="border-emerald-500 border-l-2 pl-3 grid grid-cols-3 grid-rows-4 grid-flow-col">
            <FaPhone className="size-4" />
            <FaInstagram className="size-4" />
            <FaSquareXTwitter className="size-4" />
            <FaYoutube className="size-4" />
            <p className="p-0 m-0 col-span-2">092 268 1232</p>
            <p className="p-0 m-0 col-span-2">Instagram</p>
            <p className="p-0 m-0 col-span-2">X (Twitter)</p>
            <p className="p-0 m-0 col-span-2">Youtube</p>
          </div>
        </div>
      </div>

      <p className="mt-4 pt-4">
        © {new Date().getFullYear()} I am Tawfik. All rights reserved. Powered
        by Izar.
      </p>
    </footer>
  );
};

export default Footer;
