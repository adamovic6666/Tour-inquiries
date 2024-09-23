"use client";
import { NavLinkProps } from "@/app/_types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

const NavLink = ({ url, children }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === url;
  return (
    <Link
      className={isActive ? classes.navLinkActive : classes.navLink}
      href={url}
    >
      {children}
    </Link>
  );
};

export default NavLink;
