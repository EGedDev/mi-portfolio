import React from 'react';
import { certifications } from '../data';
import { FiAward } from 'react-icons/fi';

const Certifications = () => {
  return (
    <section id="certificaciones" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certificaciones</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition flex items-start gap-3">
              <FiAward className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mt-1">{cert.date} {cert.extra && `• ${cert.extra}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;