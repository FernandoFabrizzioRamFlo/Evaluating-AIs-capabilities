import React from 'react';

const ServicesSection = () => {
  // Datos de los servicios para mapear
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Traslados industriales",
      description: "Transporte seguro de personal técnico a plantas y zonas industriales"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Rutas programadas",
      description: "Servicio de transporte regular con horarios adaptados a sus necesidades"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Transporte ejecutivo",
      description: "Servicio puerta a puerta con máxima comodidad y discreción"
    }
  ];

  return (
    /* Sección de Servicios - Muestra los 3 servicios principales */
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros servicios</h2>
        
        {/* Grid responsivo: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            /* Tarjeta de servicio individual */
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              {/* Contenedor del ícono */}
              <div className="flex justify-center mb-4">{service.icon}</div>
              
              {/* Título del servicio */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              
              {/* Descripción del servicio */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;