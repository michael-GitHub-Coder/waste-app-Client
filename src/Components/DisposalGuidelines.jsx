import React from 'react';

const DisposalGuidelines = () => {
  return (
    <section id="guidelines" className="my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Disposal Guidelines</h2>
      <p>Learn how to dispose of your waste responsibly and reduce environmental impact.</p>
      {/* Example content */}
      <div className="bg-blue-50 p-4 mt-4 rounded-lg">
        <h3 className="font-semibold">Plastics</h3>
        <ul className="list-disc pl-5">
          <li>Rinse before recycling.</li>
          <li>Check for recycling symbols.</li>
        </ul>
      </div>
    </section>
  );
};

export default DisposalGuidelines;
