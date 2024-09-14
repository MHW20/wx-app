import React, { useRef, useEffect } from "react";

interface OutsideClickTrackerProps {
  children: React.ReactNode;
  setToggleVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const OutsideClickTracker: React.FC<OutsideClickTrackerProps> = ({ children, setToggleVisible }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setToggleVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setToggleVisible]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickTracker;
