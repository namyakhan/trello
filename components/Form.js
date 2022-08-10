import React from "react";

const Form = () => {
  return (
    <div className="bg-white px-5 md:px-44 mt-10 ">
      <form className="p-6 rounded-lg  bg-gradient-to-b  from-[#413597] to-[#4B97FC] ... text-center  ">
        <h1 className="text-2xl text-white font-ubuntu">
          Sign up and get started with Trello today. A world of productive
          teamwork awaits!
        </h1>
        <div className="flex items-center justify-center space-x-6 mt-12  ">
          <input
            type="email"
            placeholder="Email"
            className="hidden md:flex md:w-[300px] xl:w-[400px] px-2 py-3 border border-gray-300 rounded text-left  "
          />
          <button className="rounded btn px-4 py-3 bg-white text-[#091E42] hover:bg-white hover:text-blue">
            Sign up
          </button>
        </div>
      </form>
      <div className="mt-24 lg:flex lg:justify-end lg:space-x-10">
        <p className="text-xl font-poppins text-center mb-5 tracking-wide lg:mt-5">
          Trello also works great on your smaller screen.
        </p>
        <div className="flex items-center justify-center space-x-8">
          <img
            className="h-[40px] w-[140px] lg:h-[45px] lg:w-[140px] "
            src="images/app-store.png"
            alt="ebay-logo"
            loading="lazy"
          />
          <img
            className="h-[40px] w-[140px] lg:h-[45px] lg:w-[140px] "
            src="images/play-store.png"
            alt="ebay-logo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
// 413597  //4B97FC
