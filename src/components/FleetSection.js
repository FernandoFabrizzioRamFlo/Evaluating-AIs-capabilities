import React from 'react';

const FleetSection = () => {
  // Datos de los vehículos de la flota
  const vehicles = [
    {
      name: "Toyota Hiace",
      capacity: "15 pasajeros",
      features: ["Asientos ergonómicos", "Aire acondicionado", "Amplio espacio para equipaje"],
      image: "https://via.placeholder.com/600x400?text=Toyota+Hiace"
    },
    {
      name: "Toyota Avanza",
      capacity: "7 pasajeros",
      features: ["Confort premium", "Sistema de entretenimiento", "WiFi a bordo"],
      image: "https://via.placeholder.com/600x400?text=Toyota+Avanza"
    }
  ];

  return (
    /* Sección de Flota - Muestra los vehículos disponibles */
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título de sección */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestra flota</h2>
        
        {/* Grid responsivo: 1 columna en móvil, 2 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {vehicles.map((vehicle, index) => (
            /* Tarjeta de vehículo individual */
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              {/* Imagen del vehículo */}
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-64 object-cover" />
              
              {/* Contenido de la tarjeta */}
              <div className="p-6">
                {/* Nombre del vehículo */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{vehicle.name}</h3>
                
                {/* Capacidad del vehículo */}
                <p className="text-blue-600 font-medium mb-4">Capacidad: {vehicle.capacity}</p>
                
                {/* Lista de características */}
                <ul className="space-y-2">
                  {vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      {/* Ícono de check */}
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;