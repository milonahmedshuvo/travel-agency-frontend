"use client";
import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68607985390063190e54d86c/1iusdld1o";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // clean up
    };
  }, []);

  return null;
};

export default TawkTo;
