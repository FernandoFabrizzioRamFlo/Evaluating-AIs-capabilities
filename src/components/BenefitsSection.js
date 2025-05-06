import React from 'react';

const BenefitsSection = () => {
  // Datos de las ventajas/beneficios
  const benefits = [
    {
      title: "Puntualidad garantizada",
      description: "Nuestros conductores llegan siempre a tiempo gracias a rutas optimizadas y monitoreo constante"
    },
    {
      title: "Seguridad total",
      description: "Vehículos con GPS y conductores capacitados en manejo defensivo y primeros auxilios"
    },
    {
      title: "Profesionalismo",
      description: "Personal uniformado y capacitado para brindar un servicio de excelencia"
    }
  ];

  return (
    /* Sección de Ventajas - Beneficios de elegir la empresa */
    <section className="py-20 bg-gray-50" id=''>
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestras ventajas</h2>
        
        {/* Grid responsivo: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            /* Tarjeta de beneficio individual */
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              {/* Título del beneficio */}
              <h3 className="text-xl font-semibold text-[--uiRed] mb-3">{benefit.title}</h3>
              
              {/* Descripción del beneficio */}
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;