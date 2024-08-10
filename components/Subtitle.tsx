import React from "react";

export interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <p className="font-bold text-2xl mt-4 text-stone-400">{children}</p>;
};

export default Subtitle;
