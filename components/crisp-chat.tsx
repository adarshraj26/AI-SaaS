"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("125a44d4-ea36-4eba-8520-f128b1c0b7fb");
  }, []);

  return null;
};
