import React from 'react';
import "../styles/imgs.css"

const CoverageSection = () => {
  return (
    /* Sección de Cobertura - Áreas de servicio */
    <section className="py-20 bg-white" id='covertura'>
      <div className="container mx-auto px-6 text-center">
        {/* Título de sección */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Área de cobertura</h2>
        
        {/* Texto descriptivo */}
        <p className="text-xl text-gray-600 mb-8">Servimos en las ciudades de Saltillo y Monterrey</p>
        
        {/* Contenedor del mapa (placeholder) */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
          <div className=" mapa h-64 bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500">Mapa de cobertura</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;