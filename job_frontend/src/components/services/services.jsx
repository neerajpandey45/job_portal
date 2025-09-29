import React from "react";

const Services = ({isOpen,onToggle}) => {
  return (
  <div>
    <span onClick={onToggle} className="cursor-pointer">Services</span>
    <ul className={`absolute text-black shadow bg-white w-[20vw] top-12 px-5 z-50
        transition-all duration-300 ease-in-out overflow-hidden flex flex-col space-y-2
        ${isOpen ? "py-4 max-h-96 opacity-100" : "py-0 max-h-0 opacity-0"}
      `}>
        <li>ioehrtyijktg</li>
        <li>fghrtbdfg</li>
        <li>dfghbdfgv</li>
    </ul>
  </div>
)};
export default Services;
