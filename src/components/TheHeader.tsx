import { NextPage } from "next";
import Link from "next/link";
import Navigation from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader: NextPage = ({}) => {
  return (
    <>
      <header className="flex h-16 items-center gap-2 bg-gray-600/60 px-3">
        <Navigation navLinks={navItems} />
      </header>
    </>
  );
};

export default TheHeader;
