import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="bg-[#e6fcff] text-[#091E42] p-5 py-20 md:px-24 lg:px-64 ">
      <FaQuoteLeft size={30} />
      <h1 className="mt-5 mb-6 text-xl font-poppins md:text-3xl md:leading-relaxed md:font-medium ">
        Everyone loves it, it has democratized our finance function. In some
        ways Trello shattered hierarchy and brought us together.
      </h1>
      <div className="flex space-x-1 mb-5 font-ubuntu ">
        <p className="font-bold ">BHARAT SUNDAR </p>
        <p >- Finance, eBay</p>
      </div>
      <img className="h-[50px] w-[120px] lg:h-[80px] lg:w-[180px] lg:ml-auto " src="images/ebay.png" alt="ebay-logo" loading="lazy" />
    </div>
  );
};

export default Reviews;
