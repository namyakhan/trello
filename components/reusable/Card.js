import React from "react";

const Card = (props) => {
  return (
    <div className="mt-24  lg:px-36 flex flex-col  md:grid md:grid-cols-2 ">
      <img
        className="h-[280px] w-[380px] md:h-[180px] md:w-[250px]  lg:h-[320px] lg:w-[450px] mb-5 justify-self-center "
        src={props.imageUrl}
        alt="trello-logo"
        loading="lazy"
      />
      <div className="mb-24">
        <p className="font-ubuntu font-medium mb-2">{props.title}</p>
        <h1 className="text-xl md:text-3xl font-medium font-ubuntu">
          {props.heading}
        </h1>
        <p className="text-md text-gray-500 lg:text-md  mt-10 mb-6 font-poppins tracking-wider">
          {props.description}
        </p>
        <button className="font-poppins font-semibold text-lg">
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default Card;
