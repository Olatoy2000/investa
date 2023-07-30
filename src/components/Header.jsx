"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Navlinks from "./NavLinks";
import { navData } from "@/constants";
import { TbMenu2 } from "react-icons/tb";
import Button from "./Button";
import { HiX } from "react-icons/hi";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavLink from "./MobileNavLink";
const Header = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* Logo */}
          <div className="relative z-10">
            <Logo />
          </div>
          {/* Navlinks */}
          <div className="items-center hidden lg:flex lg:gap-10">
            <Navlinks />
          </div>
          {/* Button */}
          <div className="flex items-center gap-6">
            <Button href="#" variant="outline" className="hidden lg:block">
              Get Advice
            </Button>
            <Button href="#" className="hidden lg:block">
              Hire me
            </Button>
          </div>
          {/* Mobile NaLinks */}
          <Popover className="lg:hidden">
            {({ open }) => (
              <>
                <Popover.Button
                  className="relative z-10 inline-flex 
                items-center p-2 -m-2 rounded-lg stroke-gray-900
                 hover:bg-gray-200/50 hover:stroke-gray-600 
                 active:stroke-gray-900 [&:not(focus-visible)]:focus-outline-none outline-none"
                >
                  {({ open }) =>
                    open ? (
                      <HiX className="text-2xl" />
                    ) : (
                      <TbMenu2 className="text-2xl" />
                    )
                  }
                </Popover.Button>
                <AnimatePresence initial={false}>
                  {open && (
                    <>
                      <Popover.Overlay
                        statics
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-0 bg-gray-300/60 backdrop::blur"
                      />
                      <Popover.Panel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -32 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: 32,
                          transition: { duration: 0.2 },
                        }}
                        className="absolute inset-x-0 top-0 z-0 px-6 pt-32 flex flex-col gap-[20px] pb-[20px] origin-top shadow-2xl rounded-b-2xl bg-gray-50 shadow-gray-900/20"
                      >
                        <div className="space-y-4">
                          {navData.map(({ _id, href, title }) => (
                            <MobileNavLink href={href} key={_id}>
                              {title}
                            </MobileNavLink>
                          ))}
                        </div>
                        <div className="flex flex-col items-start gap-6">
                          <Button href="#" variant="outline">
                            Get Advice
                          </Button>
                          <Button href="#">Hire me</Button>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
