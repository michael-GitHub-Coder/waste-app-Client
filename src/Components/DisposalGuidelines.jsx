import React, { useState, useEffect } from 'react';

const DisposalGuidelines = ({ categoryId }) => {  
  const [guidelines, setGuidelines] = useState(null);

  useEffect(() => {
    if (!categoryId) return;  

   
    fetch(`http://localhost:8080/api/categories/categoryGuideline/${categoryId}`)
      .then((response) => response.json())
      .then((data) => setGuidelines(data)) 
      .catch((error) => console.error('Error fetching disposal guidelines:', error));
  }, [categoryId]);  

  return (
    <section id="guidelines" className="my-8 p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Disposal Guidelines</h2>
      <p>Learn how to dispose of your waste responsibly and reduce environmental impact.</p>
   
      {guidelines ? (
        <div className="bg-blue-50 p-4 mt-4 rounded-lg">
          <h3 className="font-semibold">{guidelines.name}</h3>
          <ul className="list-disc pl-5">
            {guidelines.map((item, index) => (
              <li key={index}>{item.guideline}</li>  
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading guidelines...</p>  
      )}
    </section>
  );
};

export default DisposalGuidelines;
