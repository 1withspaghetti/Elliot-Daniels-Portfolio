"use client";

import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import { PropsWithChildren } from "react";

export default function ClientAnimatePresence(props: PropsWithChildren<AnimatePresenceProps>) {
  return (
    <AnimatePresence {...props} />
  );
}