"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomeClient = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const offset = 60;
        const targetPosition =
          element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
        setTimeout(
          () => window.history.pushState(null, "", window.location.pathname),
          1,
        );
      }
    }
  }, []);
  return null;
};

export default HomeClient;
