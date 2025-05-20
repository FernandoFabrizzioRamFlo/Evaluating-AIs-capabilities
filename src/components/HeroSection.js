import React from 'react';
import "../styles/HeroBanner.css"

const HeroSection = () => {
  return (
    /* Hero Section - Primera sección visible con imagen de fondo y llamado a acción */
    <section className="Hero-Container bg-center relative h-[400px] flex items-center justify-center text-white md:h-[300px] lg:h-[400px] xl:h-[800px]" id='hero'>
      {/* Overlay oscuro para mejorar legibilidad del texto sobre la imagen */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Contenedor principal del contenido del hero */}
      <div className="container mx-auto px-6 z-10 text-center flex flex-col items-center">
        {/* Título principal */}
        <h1 className="text-2xl  font-bold mb-2 md:text-4xl xl:text-5xl mb-4">Transporte profesional para personal técnico y ejecutivo</h1>
        
        {/* Subtítulo */}
        <p className="text-xl mb-11 md:text-2xl xl:text-4xl">Soluciones de movilidad seguras y puntuales para su equipo</p>
        
        {/* Botón de llamado a acción */}
        <button className="bg-[--uiRed] hover:bg-[--uiRedHover] text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-xl md:text-2xl xl:text-3xl ">
         <a href="#contacto"> Solicita una cotización</a>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;