import React from "react";

const Jobform = () => {
  return (
    <div className="container-fluid h-screen">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4 col-sm-6">
          <h3 className="text-center py-2">Upload jobs form</h3>
          <form action="" className="bg-white shadow mt-[5%]">
            <div className="row mb-2">
              <div className="col-12 space-y-2 px-5">
                <label htmlFor="">job title</label>
                <input
                  type="text"
                  placeholder="enter job title"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 px-5">
                <label htmlFor="">job location</label>
                <input
                  type="text"
                  placeholder="enter job location"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 px-5">
                <label htmlFor="">experience</label>
                <input
                  type="text"
                  placeholder="enter require experience"
                  className="w-full border border-black rounded-3 ps-1"
                  style={{ height: "35px" }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 px-5">
                <label htmlFor="">required skills</label>
                <textarea
                  name=""
                  id=""
                  className="w-full border border-black rounded-3 ps-1"
                ></textarea>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 px-5">
                <label htmlFor="">job descriptions</label>
                <textarea
                  name=""
                  id=""
                  className="w-full border border-black rounded-3 ps-1"
                ></textarea>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="btn btn-primary mb-2">post job</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Jobform;
