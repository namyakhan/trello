// import data from "../data";
// import Card from "./reusable/Card";

const Features = () => {
  // const cards = data.map((item) => {
  //   return <Card key={item.id} {...item} />;
  // });

  return (
    <div className="p-5  text-[#091E42]">
      <h2 className="text-xl md:text-4xl font-medium font-ubuntu text-center mt-24">
        Features to help your team succeed
      </h2>

      {/* reusable */}
      {/* <section>{cards}</section> */}

      {/* 1. Viewing Feature */}
      <div className="mt-36  lg:px-36 flex flex-col  md:grid md:grid-cols-2 ">
        <img
          className="h-[280px] w-[380px] md:h-[180px] md:w-[250px]  lg:h-[320px] lg:w-[450px] mb-5 justify-self-center "
          src="images/view.png"
          alt="trello-logo"
          loading="lazy"
        />
        <div className="mb-24">
          <p className="font-ubuntu font-medium mb-2">CHOOSE A VIEW</p>
          <h1 className="text-xl md:text-3xl font-medium font-ubuntu">
            The board is just the beginning
          </h1>
          <p className="text-md text-gray-500 lg:text-md  mt-10 mb-6 font-poppins tracking-wider">
            Lists and cards are the building blocks of organizing work on a
            Trello board. Grow from there with task assignments, timelines,
            productivity metrics, calendars, and more.
          </p>
          <button className="font-poppins font-semibold text-lg">
            +Learn more
          </button>
        </div>
      </div>

      {/* 2. Card Back */}
      <div className="md:mt-14  lg:px-36 flex flex-col-reverse  md:grid md:grid-cols-2 ">
        <div className="mb-24">
          <p className="font-ubuntu font-medium mb-2">DIVE INTO THE DETAILS</p>
          <h1 className="text-xl md:text-3xl font-medium font-ubuntu">
            Cards contain everything you need
          </h1>
          <p className="text-md text-gray-500 lg:text-md  mt-10 mb-6 font-poppins tracking-wider">
            Trello cards are your portal to more organized work—where every
            single part of your task can be managed, tracked, and shared with
            teammates. Open any card to uncover an ecosystem of checklists, due
            dates, attachments, conversations, and more
          </p>
          <button className="font-poppins font-semibold text-lg">
            +Learn more
          </button>
        </div>
        <img
          className="h-[280px] w-[380px] md:h-[180px] md:w-[250px]  lg:h-[320px] lg:w-[450px] mb-5 justify-self-center "
          src="images/card-back.png"
          alt="trello-logo"
          loading="lazy"
        />
      </div>

      {/* 3. Automation */}
      <div className="md:mt-14  lg:px-36 flex flex-col  md:grid md:grid-cols-2 ">
        <img
          className="h-[280px] w-[380px] md:h-[180px] md:w-[250px]  lg:h-[320px] lg:w-[450px] mb-5 justify-self-center "
          src="images/automation.png"
          alt="trello-logo"
          loading="lazy"
        />
        <div className="mb-24">
          <p className="font-ubuntu font-medium mb-2">MEET YOUR NEW BUTLER</p>
          <h1 className="text-xl md:text-3xl font-medium font-ubuntu">
            No-code automation
          </h1>
          <p className="text-md text-gray-500 lg:text-md  mt-10 mb-6 font-poppins tracking-wider">
            Let the robots do the work—so your team can focus on work that
            matters. With Trello’s built-in automation, Butler, reduce the
            number of tedious tasks (and clicks) on your project board by
            harnessing the power of automation across your entire team.
          </p>
          <button className="font-poppins font-semibold text-lg">
            +Learn more
          </button>
        </div>
      </div>

      {/* 4. Tools  */}
      <div className="md:mt-14  lg:px-36 flex flex-col-reverse md:grid md:grid-cols-2 ">
        <div className="mb-24">
          <p className="font-ubuntu font-medium mb-2">POWER-UPS</p>
          <h1 className="text-xl md:text-3xl font-medium font-ubuntu">
            Integrate top work tools
          </h1>
          <p className="text-md text-gray-500 lg:text-md  mt-10 mb-6 font-poppins tracking-wider">
            Easily connect the apps your team already uses into your Trello
            workflow, or add a Power-Up that helps fine-tune one specific need.
            With hundreds of Power-Ups available, your team’s workflow wishes
            are covered.
          </p>
          <button className="font-poppins font-semibold text-lg">
            +Learn more
          </button>
        </div>
        <img
          className="h-[300px] w-[350px] md:h-[180px] md:w-[200px]  lg:h-[350px] lg:w-[380px] mb-5 justify-self-center "
          src="images/tools.png"
          alt="tools-logo"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Features;
