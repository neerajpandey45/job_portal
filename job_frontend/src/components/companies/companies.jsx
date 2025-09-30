import React from "react";
const Companies = ({ isOpen, onToggle }) => {
  return (
    <div className="">
      <span onClick={onToggle} className="cursor-pointer">
        Companies
      </span>
      {isOpen && (
        <ul
          className={`absolute text-black shadow bg-white w-[20vw] top-12 px-5 z-50 
        transition-all duration-300 ease-in-out overflow-hidden flex flex-col space-y-2
py-3 mb-2
      `}
        >
          <li>sdhjkfhdjs</li>
          <li>dfsdfsvc</li>
          <li>fvgdsfzvcf</li>
          <li>vcfdsvcsz</li>
        </ul>
      )}
    </div>
  );
};

export default Companies;
