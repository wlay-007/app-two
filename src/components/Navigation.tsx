"use client";

import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import { NextPage } from "next";
import Link from "next/link";
import NextAuth from "next-auth/next";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation: NextPage<Props> = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            className={isActive ? "text-orange-300" : "text-white"}
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link
          href="#"
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
        >
          SignOut
        </Link>
      ) : (
        <Link href="/api/auth/signin">SignIn</Link>
      )}
    </>
  );
};

export default Navigation;
