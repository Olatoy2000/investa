'use client'

import { navData } from "@/constants";
import React, { useState} from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Navlinks = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>
      {navData.map(({ href, title, _id }) => (
        <Link
          key={_id}
          href={href}
          className="relative px-3 py-2 -mx-3 -my-2 text-base text-gray-700 transition-colors"
          onMouseEnter={() => setHoverIndex(_id)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <AnimatePresence>
            {hoverIndex === _id && (
              <motion.span
                className="absolute inset-0 bg-gray-100 rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span>{title}</span>
        </Link>
      ))}
    </>
  );
};

export default Navlinks;
