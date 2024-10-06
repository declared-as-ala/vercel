import React from "react";

function SmallCard({ title, imageUrl, onClick }) {
  return (
    <div
      onClick={onClick} // Handle click here
      className="w-full bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
