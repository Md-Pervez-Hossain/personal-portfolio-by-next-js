import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-8 font-semibold text-[20px]">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="flex items-center gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
