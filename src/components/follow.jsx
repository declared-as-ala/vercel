export const FloatingFollowUp = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white py-2 px-4 border border-gray-300 flex justify-between items-center z-50 shadow-lg rounded-full mb-4 max-w-lg mx-auto bg-opacity-100">
      <input
        type="text"
        placeholder="Ask follow-up"
        className="flex-grow bg-gray-100 text-sm text-gray-600 py-2 px-4 rounded-full border-none outline-none"
      />
      <div className="flex items-center space-x-3 ml-3">
        <div className="flex items-center">
          <span className="text-xs text-gray-600">Pro</span>
          <div className="relative inline-block w-10 ml-2 align-middle select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-4 w-8 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
        <div className="bg-gray-200 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 1a9 9 0 10-18 0 9 9 0 0018 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
