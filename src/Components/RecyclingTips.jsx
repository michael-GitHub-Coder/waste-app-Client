import React from 'react';

const RecyclingTips = () => {
  return (
    <section id="tips" className="my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Recycling Tips</h2>
      <p>Here are some helpful tips for recycling properly:</p>
      <ul className="list-disc pl-5">
        <li>Clean and dry recyclables before disposal.</li>
        <li>Avoid mixing recyclable and non-recyclable materials.</li>
        <li>Use local recycling centers for specific items like electronics.</li>
      </ul>
    </section>
  );
};

export default RecyclingTips;
