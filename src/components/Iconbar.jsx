import React from "react";
import {
  FiStar,
  FiGlobe,
  FiDollarSign,
  FiFilm,
  FiTrendingUp,
} from "react-icons/fi";

const categories = [
  { name: "Top", icon: <FiStar style={{ height: "10", width: "10" }} /> },
  {
    name: "Technology & Science",
    icon: <FiGlobe style={{ height: "10", width: "10" }} />,
  },
  {
    name: "Finance",
    icon: <FiDollarSign style={{ height: "10", width: "10" }} />,
  },
  {
    name: "Arts & Culture",
    icon: <FiFilm style={{ height: "10", width: "10" }} />,
  },
  {
    name: "Sports",
    icon: <FiTrendingUp style={{ height: "10", width: "10" }} />,
  },
];

function IconBar({ selectedCategory, setSelectedCategory }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px", // Equivalent to space-x-8
        backgroundColor: "#f7f7f7",

        padding: "4px 0", // Equivalent to py-2
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px", // Space between icon and text
            padding: "4px 5px", // Equivalent to px-6 py-2
            borderBottom:
              selectedCategory === category.name ? "2px solid black" : "none",
            color: selectedCategory === category.name ? "#000" : "#6B7280", // Text color
            fontWeight: selectedCategory === category.name ? "bold" : "normal",
            transition: "border 0.2s ease",
            cursor: "pointer",
          }}
        >
          {category.icon}
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default IconBar;
