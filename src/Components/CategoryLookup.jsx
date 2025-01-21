import React from 'react';
import { MdOutlineRecycling } from "react-icons/md";

const CategoryLookup = () => {
  return (
    <section id="category" className="my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Category Lookup</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="category-card bg-green-100 p-4 rounded-lg">
          <div className="w-16 h-16 mx-auto"><MdOutlineRecycling size={60} color="green"/></div>
          <h3 className="text-xl text-center">Plastic</h3>
        </div>
        <div className="category-card bg-blue-100 p-4 rounded-lg">
          <div className="w-16 h-16 mx-auto"><MdOutlineRecycling size={60} color="blue"/></div>
          <h3 className="text-xl text-center">Paper</h3>
        </div>
        <div className="category-card bg-yellow-100 p-4 rounded-lg">
          <div className="w-16 h-16 mx-auto"><MdOutlineRecycling size={60} color="orange"/></div>
          <h3 className="text-xl text-center">Organic</h3>
        </div>
        <div className="category-card bg-red-100 p-4 rounded-lg">
          <div className="w-16 h-16 mx-auto"><MdOutlineRecycling size={60} color="red"/></div>
          <h3 className="text-xl text-center">Metal</h3>
        </div>
      </div>
    </section>
  );
};

export default CategoryLookup;
