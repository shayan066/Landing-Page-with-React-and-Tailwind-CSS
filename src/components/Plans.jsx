import React from "react";

const Plans = () => {
  return (
    <div className="py-[80px] px-5">
      <div className="max-w-[1280px] md:grid grid-cols-3 mx-auto gap-8 ">
        <div className="  shadow-xl  h-[500px] my-4 hover:scale-105 duration-200 ">
          <div className="text-3xl justify-center text-center px-10 py-10 ">
            <h2 className="py-4">Web Development</h2>
            <h1 className="py-4">$149</h1>
            <p className="text-lg font-semibold py-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
              facere.
            </p>
          </div>
        </div>
        <div className=" shadow-xl h-[500px] my-4 bg-gray-100 hover:scale-105 duration-200">
          <div className="text-3xl justify-center text-center px-10 py-10" >
            <h2 className="py-4">Digital Marketing</h2>
            <h1 className="py-4">$149</h1>
            <p className="text-lg font-semibold py-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
              modi!
            </p>
          </div>
        </div>
        <div className=" shadow-xl h-[500px] my-4 hover:scale-105 duration-200">
          <div className="text-3xl justify-center text-center items-center px-10 py-10" >
            <h2 className="py-4">App Development</h2>
            <h1 className="py-4">$149</h1>
            <p className="text-lg font-semibold py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, accusantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
