"use client";
import React, { useState, useId, useRef } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";
import AppScreen from "./AppScreen";
import clsx from "clsx";

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
];

const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);

const AppFeature = () => {
  return <div></div>;
};

export default AppFeature;
