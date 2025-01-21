import React, { useState, useEffect } from 'react';

const RecyclingTips = ({ categoryId }) => {  
  const [tips, setTips] = useState([]); 

  useEffect(() => {
    if (!categoryId) return;  

    fetch(`http://localhost:8080/api/categories/categoryTips/${categoryId}`) 
      .then((response) => response.json())
      .then((data) => setTips(data)) 
      .catch((error) => console.error('Error fetching recycling tips:', error)); 
  }, [categoryId]); 

  return (
    <section id="tips" className="mb-8 p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Recycling Tips</h2>
      <p>Here are some helpful tips for recycling properly:</p>
      <div  className="bg-blue-50 p-4 mt-4 rounded-lg">
        <ul className="list-disc pl-5">
   
            {tips.length > 0 ? (
            tips.map((tipObject, index) => (
                <li>{tipObject.tip}</li>   
            ))
            ) : (
            <li>No tips for this category</li>  
            )}
        </ul>
      </div>
    </section>
  );
};

export default RecyclingTips;
