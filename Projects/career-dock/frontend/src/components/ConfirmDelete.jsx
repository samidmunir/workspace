// components/DeleteConfirmModal.jsx
const DeleteConfirmModal = ({ onConfirm, onCancel }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md transition-all scale-100">
          <h2 className="text-xl font-bold mb-4 text-center">Are you sure you want to delete this record?</h2>
          <div className="flex justify-around gap-4 mt-4">
            <button onClick={onCancel} className="px-4 py-2 border-2 border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-zinc-950 transition-all">
              Cancel
            </button>
            <button onClick={onConfirm} className="px-4 py-2 border-2 border-rose-500 text-rose-500 rounded-lg hover:bg-rose-500 hover:text-zinc-950 transition-all">
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteConfirmModal;
  