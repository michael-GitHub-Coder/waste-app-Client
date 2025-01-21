import React, { useEffect, useState } from 'react';
import { MdOutlineRecycling } from "react-icons/md";
import DisposalGuidelines from './DisposalGuidelines'; 
import RecyclingTips from './RecyclingTips'; 

const CategoryLookup = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/categories');
        const data = await response.json();
        
        setCategories(data);  
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <section id="category" className="my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Category Lookup</h2>
      

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => {
          let iconColor = category.iconColor;
          let bgColor = category.color;

          if (category.name.toLowerCase() === 'plastic') {
            iconColor = 'green';
            bgColor = 'bg-green-100';
          } else if (category.name.toLowerCase() === 'paper') {
            iconColor = 'blue';
            bgColor = 'bg-blue-100';
          } else if (category.name.toLowerCase() === 'organic') {
            iconColor = 'orange';
            bgColor = 'bg-yellow-100';
          } else if (category.name.toLowerCase() === 'glass') {
            iconColor = 'gray';
            bgColor = 'bg-gray-100';
          }

          return (
            <div 
              key={index} 
              className={`category-card p-4 rounded-lg ${bgColor}`} 
              style={{ backgroundColor: bgColor }}
            >
              <div className="w-16 h-16 mx-auto">
                <MdOutlineRecycling 
                  size={60} 
                  color={iconColor} 
                />
              </div>
              <h3 
                className="text-xl text-center cursor-pointer"
                onClick={() => handleCategoryClick(category)} 
              >
                {category.name}
              </h3>
            </div>
          );
        })}
      </div>
      
  
      {selectedCategory && (
        <div className="mt-8">
          {/* <h3 className="text-2xl font-semibold mb-4">{selectedCategory.name} Tips and Guidelines</h3> */}
          
          {/* Display the guidelines and tips */}
          <DisposalGuidelines categoryId={selectedCategory.id}/>
          <RecyclingTips categoryId={selectedCategory.id}/>
        </div>
      )}
    </section>
  );
};

export default CategoryLookup;
