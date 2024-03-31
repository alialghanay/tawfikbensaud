import Link from "next/link";
interface TLinkProps {
  href: string;
  children: React.ReactNode;
}
const TLink = ({ href, children }: TLinkProps) => {
  return (
    <Link
      className="font-cairo text-white md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl bg-primary py-2 px-8 rounded shadow-cos shadow-black font-bold w-fit m-2 lg:m-4 transition-all duration-300 ease-in-out hover:bg-teal-950 hover:shadow-zinc-900 cursor-pointer"
      href={href}
    >
      {children}
    </Link>
  );
};

export default TLink;
