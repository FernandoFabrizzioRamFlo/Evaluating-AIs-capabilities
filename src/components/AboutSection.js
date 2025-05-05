import React from 'react';

const AboutSection = () => {
  return (
    /* Sección "Quiénes somos" - Información sobre la empresa */
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Contenedor centrado con ancho máximo */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Título de sección */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiénes somos</h2>
          
          {/* Texto descriptivo */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Especializados en el transporte de ingenieros y personal técnico, garantizamos traslados seguros y puntuales 
            a sus destinos industriales. Nuestro compromiso es brindar un servicio confiable que cumpla con los estándares 
            más exigentes de la industria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;