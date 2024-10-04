"use client";

import { ReactChildNode } from "@/app/_types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactChildNode | null }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && document.querySelector("#portal")
    ? createPortal(children, document.querySelector("#portal") as Element)
    : null;
};

export default Portal;
