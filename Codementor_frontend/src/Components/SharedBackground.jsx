// src/components/SharedBackground.jsx
import React from "react";

const SharedBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black opacity-90" />
      <div className="absolute top-1/4 -left-24 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-24 w-[32rem] h-[32rem] bg-white/10 rounded-full blur-3xl animate-float [animation-delay:-6s]" />
      <div className="absolute inset-0 backdrop-blur-[30px] sm:backdrop-blur-[60px]" />
    </div>
  );
};

export default SharedBackground;
