import React from 'react';

const HeroSection = () => {
  return (
    /* Hero Section - Primera sección visible con imagen de fondo y llamado a acción */
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Overlay oscuro para mejorar legibilidad del texto sobre la imagen */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Contenedor principal del contenido del hero */}
      <div className="container mx-auto px-6 z-10 text-center">
        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transporte profesional para personal técnico y ejecutivo</h1>
        
        {/* Subtítulo */}
        <p className="text-xl mb-8">Soluciones de movilidad seguras y puntuales para su equipo</p>
        
        {/* Botón de llamado a acción */}
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Solicita una cotización
        </button>
      </div>
    </section>
  );
};

export default HeroSection;