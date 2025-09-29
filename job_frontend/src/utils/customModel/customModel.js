const CustomModal = ({ items, children, onClose, onSave, add }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full  z-50 flex justify-center items-start px-4 bg-black bg-opacity-50 pt-[10%]">
      <div className="bg-white p-6  rounded-lg w-full md:max-w-[900px] shadow-lg relative min-h-[10vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">{items}</h2>
        {children}
        <div className="flex justify-between mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600">
            ADD
          </button>
          <div className=" flex justify-between gap-4">
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
            <button className="btn btn-primary btn-sm px-3" onClick={onSave}>
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomModal;
