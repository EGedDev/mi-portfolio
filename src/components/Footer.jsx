import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] py-8">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} Elí Garro. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;