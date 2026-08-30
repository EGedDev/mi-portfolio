import React from 'react';
import { skills } from '../data.js';

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-100 hover:bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;