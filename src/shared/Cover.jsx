import React from "react";

const Cover = ({ img, title, subTitle }) => {
  return (
    <div>
      <div
        className="hero h-[560px]"
        style={{
          backgroundImage: `url("${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg bg-black opacity-40 px-16 py-10">
            <h1 className="mb-5 text-5xl text-white font-bold">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
