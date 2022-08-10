import React from "react";

const Teams = () => {
  return (
    <div className="p-5 ">
      <div className="flex flex-col items-center mt-16  ">
        <h1 className="text-2xl lg:text-4xl font-medium text-center text-[#091E42] font-ubuntu">
          It’s more than work. It’s a way of working together.
        </h1>
        <div className="text-lg lg:text-xl text-center mt-5 mb-10 font-poppins">
          <p>
            Start with a Trello board, lists, and cards. Customize and expand
            with more features as your teamwork grows.
          </p>
          <p>
            Manage projects, organize tasks, and build team spirit—all in one
            place.
          </p>
        </div>

        <button className="rounded btn px-3 py-3 lg:px-5 lg:py-3 text-lg mb-10 bg-white border-solid border border-[#0065ff]  text-[#0065ff] font-poppins hover:text-[#091E42]  hover:bg-white ">
          Start doing
        </button>
        <img
          className="h-auto w-auto place-content-center"
          src="images/net-board.png"
          alt="trello-logo"
          loading="lazy"
        />
      </div>

      {/* Teams Logos */}

      <div className="px-5 md:px-24 lg:px-56">
        <p className="text-lg text-[#091E42]    lg:text-xl text-center mt-10 mb-10 font-poppins  ">
          Join over 2,000,000 teams worldwide that are using Trello to get more
          done.
        </p>
        <div className="flex flex-col items-center space-y-5 md:grid md:grid-cols-2  justify-items-center lg:grid lg:grid-cols-4 ">
          <img src="coinbase.svg" alt="coinbase" />
          <img src="johnDeere.svg" alt="johnDeere" />
          <img src="grandHyatt.svg" alt="grandHyatt" />
          <img src="Google.svg" alt="Google" />
        </div>
      </div>
    </div>
  );
};

export default Teams;
