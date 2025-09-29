export const EditFirstNme = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="enter skills details"
        className="w-full border"
      />
    </div>
  );
};
export const EditResumeProfile = () => {
  return (
    <div>
      <form className="bg-white border rounded-3 min-h-[40vh] mr-10 py-3 space-y-5 px-2 ">
        <div className="">
        <input
          type="text"
          placeholder="enter profile details"
          className="w-full border py-2 px-4"
        />
        </div>
        <div>
         <input
          type="text"
          placeholder="enter contact details"
          className="w-full border py-2 px-4"
        />
        </div>
        <button className="btn btn-primary"> save</button>
      </form>
    </div>
  );
};
import React  from "react";
export const EditSkill=()=>{
    const handle=(e)=>{
        const textref=e.target;
        if(textref){
            textref.style.height="auto";
            textref.style.height=`${textref.scrollHeight}px`;
        }
    }
  return (
   <div className="mr-10 h-auto">
    <textarea
        onInput={handle} // ✅ use utility function
        placeholder="Enter skills details"
           className="w-full border-1 border-indigo-500 text-base font-normal rounded-xl px-4 py-2 resize-none overflow-hidden "
        style={{
          minHeight: "150px",
          maxHeight: "400px", // optional max
          resize:"none",
        }}
      />
    </div>
  );
};

export const EditEducation = () => {
  return (
    <div>
      <textarea
        type="text"
        placeholder="enter skills details"
        className="w-full border"
      />
    </div>
  );
};
export const EditLanguage = () => {
  return (
    <div>
      <textarea
        type="text"
        placeholder="enter skills details"
        className="w-full border"
      />
    </div>
  );
};
