import React from "react";
import { Popover } from "@headlessui/react";
import Link from "next/link";
const MobileNavLink = ({ children, ...props }) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700" {...props}
    >
      {children}
    </Popover.Button>
  );
};

export default MobileNavLink;
