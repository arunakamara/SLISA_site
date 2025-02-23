import React, { useState } from 'react';

const Hero = () => {
  const [joined, setJoined] = useState(false);

  const handleJoinClick = () => {
    setJoined(true);
    // Simulate a join action (e.g., later connect to a form or API)
    setTimeout(() => setJoined(false), 2000); // Reset after 2s
  };

  return (
    <section className="bg-white py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Welcome to SLSU-AP
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Uniting Sierra Leonean students in Andhra Pradesh with pride and purpose.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          <strong>Mission:</strong> Building a community that celebrates our heritage and supports academic excellence.
        </p>
        <button
          onClick={handleJoinClick}
          className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
            joined ? 'bg-green-600' : 'bg-green-800 hover:bg-green-700'
          }`}
        >
          {joined ? 'Welcome Aboard!' : 'Join Us'}
        </button>
      </div>
    </section>
  );
};

export default Hero;