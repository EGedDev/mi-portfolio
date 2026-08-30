import React, { useState } from 'react';
import { personal } from '../data';

const Contact = () => {
  const [form, setForm] = useState({ title: '', name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje enviado (demo):', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ title: '', name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contáctame</h2>
        <p className="text-center text-gray-600 mb-8">
          Rellena el formulario y me pondré en contacto contigo lo antes posible.
        </p>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          <input
            type="text" name="title" placeholder="Título del mensaje" required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.title} onChange={handleChange}
          />
          <input
            type="text" name="name" placeholder="Tu nombre" required
            className="w-full border border-gray-300 rounded-lg p-3"
            value={form.name} onChange={handleChange}
          />
          <input
            type="email" name="email" placeholder="Tu correo" required
            className="w-full border border-gray-300 rounded-lg p-3"
            value={form.email} onChange={handleChange}
          />
          <textarea
            name="message" placeholder="Escribe tu mensaje..." rows="5" required
            className="w-full border border-gray-300 rounded-lg p-3"
            value={form.message} onChange={handleChange}
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
            Enviar Mensaje
          </button>
          {submitted && <p className="text-green-600 text-center">✅ ¡Mensaje enviado (demo)!</p>}
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">o escríbeme directamente a <a href={`mailto:${personal.email}`} className="text-blue-600">{personal.email}</a></p>
      </div>
    </section>
  );
};

export default Contact;