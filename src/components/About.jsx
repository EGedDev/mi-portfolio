import React from 'react';
import { about } from '../data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Sobre mí</h2>
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
          {about}
        </div>
      </div>
    </section>
  );
};

export default About;