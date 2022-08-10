import React from "react";

const Footer = () => {
  return (
    <div className="mt-24 mb-10 text-gray-500 font-poppins leading-tight">
      <ul className=" text-center md:flex md:items-center md:justify-center md:space-x-5 space-y-2 ">
        <li></li>
        <li>Templates</li>
        <li>Pricing</li>
        <li>Apps</li>
        <li>Jobs</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>About</li>
        <li>Help</li>
        <li>Legal</li>
        <li>Cookie Settings</li>
        <li>Privacy</li>
      </ul>
      <div className="text-center leading-tight">
        <img
          className="h-[50px] w-[120px] lg:h-[100px] lg:w-[180px] ml-auto mr-auto"
          src="images/atlassian-logo.png"
          alt="ebay-logo"
          loading="lazy"
        />
        <p>Copyright © 2022 Atlassian</p>
      </div>
    </div>
  );
};

export default Footer;
