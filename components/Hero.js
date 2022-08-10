import React from "react";

const Hero = () => {
  return (
    <div className=" px-5 lg:px-44    flex flex-col-reverse items-center  lg:flex-row justify-around  bg-gradient-to-b from-[#eae6ff] to-white ...  text-[#091E42] py-10 border-b-2 mb-10v">
      <div>
        {/* Text */}
        <div className="mb-10  text-center lg:text-left  ">
          <h1 className="text-4xl xl:text-5xl font-medium font-ubuntu xl:leading-snug mb-2">
            Trello helps teams move work forward.
          </h1>
          <p className="text-md lg:text-lg  leading-relaxed font-poppins tracking-wide">
            Collaborate, manage projects, and reach new productivity peaks.{" "}
            <br />
            From high rises to the home office, the way your team works
            <br /> is unique-accomplish it all with Trello.
          </p>
        </div>

        {/* Input*/}
        <div className="flex space-x-5   place-content-center lg:justify-start ">
          <input
            type="email"
            placeholder="Email"
            className="hidden md:flex md:w-[300px] xl:w-[400px] px-2 py-3 border border-gray-300 rounded text-left "
          />
          <button className="rounded btn">Sign up - it's free</button>
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          className="h-[300px] w-[250px] lg:h-[450px] lg:w-[350px] xl:mr-16  mb-5 "
          src="images/hero.png"
          alt="trello-logo"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
