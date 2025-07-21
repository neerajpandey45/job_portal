
 const CustomModal = ({ items, children, onClose ,onSave }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
        <h2 className="text-lg font-bold mb-4">{items}</h2>
        {children}
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
          <button className="btn btn-primary btn-sm px-3" onClick={onSave}>save</button>
        </div>
      </div>
    </div>
  );
};
export default CustomModal;
