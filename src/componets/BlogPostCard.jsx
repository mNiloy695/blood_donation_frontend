import React from 'react';

const BlogPostCard = ({ title, description, date, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 my-10">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <p className="text-xs text-gray-400 mt-2">{date}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
