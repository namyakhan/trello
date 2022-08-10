import React from "react";

const About = () => {
  return (
    <div className="font-ubuntu text-[#091E42] px-10 lg:px-40 py-14 sm:grid sm:grid-rows lg:grid lg:grid-cols-3 gap-10 border-b-2 ">
      {/* Tag */}
      <div className="space-y-8 lg:flex lg:space-x-10">
        <img
          className="w-[60px] h-[100px] "
          src="images/tag.png"
          alt="trello-logo"
          loading="lazy"
        />
        <div className="">
          <h1 className="text-2xl font-medium mb-3">See Trello pricing</h1>
          <p className="font-poppins text-md mb-10">
            Whether you’re a team of 2 or 2,000, Trello can be customized for
            your organization. Explore which option is best for you.
          </p>

          <button className="rounded btn px-5 py-3">Compare pricing</button>
        </div>
      </div>

      {/* Compass */}
      <div className="space-y-8 lg:flex lg:space-x-10 mt-10 lg:mt-0">
        <img
          className="w-[80px] h-[90px]"
          src="images/compass.png"
          alt="compass-logo"
          loading="lazy"
        />
        <div className="">
          <h1 className="text-2xl font-medium mb-3">What is Trello?</h1>
          <p className="font-poppins text-md mb-10">
            Trello is the visual tool that empowers your team to manage any type
            of project, workflow, or task tracking.
          </p>

          <button className="rounded btn px-5 py-3">Tour Trello</button>
        </div>
      </div>

      {/* Solutions */}
      <div className="space-y-8 lg:flex lg:space-x-10 mt-10 lg:mt-0">
        <img
          className="w-[90px] h-[90px]"
          src="images/solutions.png"
          alt="solutions-logo"
          loading="lazy"
        />
        <div className="">
          <h1 className="text-2xl font-medium mb-3">
            Discover Trello Enterprise
          </h1>
          <p className="font-poppins text-md mb-10">
            The productivity tool teams love, paired with the features and
            security needed for scale.
          </p>

          <button className="rounded btn px-5 py-3">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
