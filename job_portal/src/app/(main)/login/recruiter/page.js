export default function Recruiter() {
  return (
    <div className="flex flex-col">
      <div>
        <h5 className="text-center py-3">This is recruiter page</h5>
      </div>
      <div className="row w-full flex justify-center">
        <div className="col-12 col-md-4  shadow">
          <form className="flex flex-col min-h-[40vh] py-4 gap-3">
            <div className="px-5">
              <label className="mb-2 text-break">Username:</label>
              <input
                type="text"
                placeholder="enter user name"
                className="w-full border border-black rounded-3 px-3 h-[30px]"
              />
            </div>
            <div className="px-5">
              <label className="mb-2 text-break">Password:</label>
              <input
                type="password"
                placeholder="enter password"
                className="w-full border border-black rounded-3 px-3 h-[30px]"
              />
            </div>
            <div className="flex justify-center">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">Don't have any account?</p>
            <div className="flex justify-center">
              <button className=" btn btn-danger btn-sm">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
