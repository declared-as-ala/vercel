import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FloatingFollowUp } from "./follow";
const ArticleDetail = () => {
  const location = useLocation();
  const article = location.state?.article || {}; // Safely access article data
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Main image with overlay */}
      <div className="relative">
        <img
          src={article.imageUrl || "https://via.placeholder.com/600"} // Fallback image
          alt="Article"
          className="w-full h-64 object-cover rounded-t-lg cursor-pointer"
          onClick={handleImageClick}
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
          {article.image_credits}
        </div>
      </div>

      {/* Main title and statistics */}
      <h1 className="text-3xl font-bold mt-6">{article.title}</h1>
      <div className="flex items-center text-gray-600 text-sm mt-2 space-x-4">
        <span>Curated by {article.curated_by}</span>
        <span>{article.read_time} read</span>
        <span>{article.date}</span>
        <span>{article.views} views</span>
        <span>{article.likes} likes</span>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700">{article.description}</p>

      {/* Side section with buttons for additional resources */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="lg:col-span-3 space-y-6">
          {/* Sections with content */}
          <div>
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p className="text-gray-700">{article.project_overview}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Défis Techniques de Quandroom
            </h2>
            <p className="text-gray-700">{article.production_journey}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Contenu et Signification</h2>
            <p className="text-gray-700">{article.content_significance}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Réédition 2024</h2>
            <p className="text-gray-700">{article.reissue_2024}</p>
          </div>
        </div>

        {/* Sidebar with additional resources */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <ul className="space-y-2">
            {article.link1 && (
              <li className="text-blue-500">
                <a href={article.link1.url}>{article.link1.title}</a>
              </li>
            )}
            {article.link2 && (
              <li className="text-blue-500">
                <a href={article.link2.url}>{article.link2.title}</a>
              </li>
            )}
            {article.link3 && (
              <li className="text-blue-500">
                <a href={article.link3.url}>{article.link3.title}</a>
              </li>
            )}
            {article.link4 && (
              <li className="text-blue-500">
                <a href={article.link4.url}>View 2 more</a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Full-Size Image */}
            <img
              src={article.imageUrl || "https://via.placeholder.com/600"}
              alt="Full View"
              className="max-w-4xl max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
      <FloatingFollowUp />
    </div>
  );
};

export default ArticleDetail;
