import React from 'react';

const Hero = () => (
  <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
    <div className="relative max-w-6xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">DevOps & Data Engineer</h1>
          <p className="text-xl text-blue-100 mb-8">Building scalable solutions and transforming data into insights</p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/api/placeholder/500/500" 
            alt="Developer illustration" 
            className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
