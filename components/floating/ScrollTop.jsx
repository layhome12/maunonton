"use client";

import FeatherIcon from "../icons/FeatherIcon";
import { useCallback, useRef, useState } from "react";

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observer = useRef();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const headerElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setShowScrollTop(false);
        } else {
          if (!showScrollTop) setShowScrollTop(true);
        }
      });
      if (node) observer.current.observe(node);
    },
    [showScrollTop]
  );

  return (
    <>
      <label htmlFor="btn-arrow-up" ref={headerElement}></label>
      <div
        className={`fixed bottom-10 right-10 z-[99] ${
          !showScrollTop && "hidden"
        }`}
      >
        <button
          id="btn-arrow-up"
          className="btn btn-circle btn-primary"
          onClick={handleScrollTop}
        >
          <FeatherIcon icons={"arrow-up"} width={20} />
        </button>
      </div>
    </>
  );
};

export default ScrollTop;
