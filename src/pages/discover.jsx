// Discover.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";
import DiscoverIcon from "../components/svg";
import IconBar from "../components/Iconbar"; // Import the IconBar component
// @ts-ignore
import data from "../../assets/data.json";

function Discover() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Top");

  // Filter articles based on the selected category
  const filteredArticles = data.filter(
    (article) => article.category === selectedCategory
  );

  // Function to handle navigation to article detail page
  const handleArticleClick = (article) => {
    navigate(`/page/${article.title.replace(/\s+/g, "-").toLowerCase()}`, {
      state: { article },
    });
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col px-4 md:px-12 mt-4">
      {" "}
      {/* Changed background color */}
      {/* Discover Header */}
      <div className="mb-6">
        {" "}
        {/* Reduced bottom margin */}
        <div className="flex items-center justify-start gap-x-2 mx-32">
          <DiscoverIcon className="h-16 w-20" /> {/* Adjusted icon size */}
          <h1 className="font-display text-3xl text-textMain">Discover</h1>
          {/* Reduced font size */}
        </div>
        <hr className="mt-2 mb-4 border-t border-gray-300 w-full" />{" "}
        {/* Minimized space between h1 and hr */}
      </div>
      {/* Sticky IconBar for Category Tabs */}
      <div className="sticky top-0 z-10 ">
        <IconBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      {/* Main Content */}
      <div className="grid gap-4 flex-grow pt-6">
        {" "}
        {/* Reduced spacing here */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full max-w-4xl mx-auto">
          {/* Display the first article as a LargeCard */}
          {filteredArticles.length > 0 && (
            <LargeCard
              title={filteredArticles[0].title}
              text={filteredArticles[0].content}
              imageUrl={filteredArticles[0].imageUrl}
              onClick={() => handleArticleClick(filteredArticles[0])}
              className="bg-white shadow-lg rounded-lg p-4"
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto -mt-4">
          {" "}
          {/* Reduced margin-top for SmallCard */}
          {/* SmallCards for remaining articles */}
          {filteredArticles.slice(1).map((article) => (
            <SmallCard
              key={article.id}
              title={article.title}
              imageUrl={article.imageUrl}
              onClick={() => handleArticleClick(article)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
