import React from "react";

function LargeCard({ title, text, imageUrl, onClick }) {
  return (
    <div
      onClick={onClick} // Handle click here
      className="w-full bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        className="w-full h-64 object-cover rounded-t-lg"
        src={imageUrl}
        alt={title}
      />
      <div className="p-6">
        <h2 className="font-bold text-2xl text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

export default LargeCard;
