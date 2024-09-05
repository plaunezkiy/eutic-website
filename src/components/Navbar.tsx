"use client";
import React, { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const links = [
    {
      label: "Teams",
      link: "/teams",
    },
    {
      label: "Events",
      link: "https://www.instagram.com/eutic24_25/",
    },
    {
      label: "Partners",
      link: "/partners",
    },
    {
      label: "EFC",
      link: "https://www.instagram.com/eutic24_25/",
    },
  ];

  return (
    <nav className="w-full h-20 border-b px-4 flex justify-center shadow-sm">
      {/* container */}
      <div className="h-full w-full lg:w-2/3 flex items-center justify-between">
        {/* brand link */}
        <Link href="/">
          <img className="p-2 h-16" src="logo.png" alt="eutic_logo" />
        </Link>
        {/* mobile nav button */}
        <Burger
          opened={opened}
          onClick={toggle}
          size="md"
          hiddenFrom="sm"
          aria-label="Toggle navigation"
        />
        {/* links */}
        <div
          className={`w-full h-fit bg-white ${
            opened ? "visible" : "invisible"
          } z-10 text-lg font-medium md:visible absolute top-20 left-0 md:static border-b md:border-none divide-y md:divide-none flex flex-col md:flex-row justify-center items-center md:gap-16`}
        >
          {links.map((link, idx) => (
            <Link
              href={link.link}
              key={idx}
              className="w-full md:w-fit text-center p-4 hover:text-yellow-500 duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* /links */}
      </div>
    </nav>
  );
};

export default Navbar;
