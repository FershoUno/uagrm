import { useEffect, useState } from 'react';
import attentionData from '../data/attention.json';  // Importa el JSON con los datos

// Tipar el estado para que coincida con la estructura del JSON
import { AttentionData } from '../types/attention';

const HorarioAtencion = ({
  dia,
  hora,
  encargado,
  notas
}: {
  dia: string;
  hora: string;
  encargado: string;
  notas: string;
}) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm space-y-4 md:space-y-0 md:space-x-6">
    <div className="flex items-center space-x-2">
      <i className="bx bx-calendar text-lg text-gray-600 dark:text-gray-300"></i>
      <p className="text-gray-800 dark:text-gray-300 font-medium">{dia}</p>
    </div>
    <div className="text-gray-700 dark:text-gray-300">
      <p className="font-semibold">{hora}</p>
      <p><strong>{encargado}</strong> - Encargado de Núcleo Linux</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{notas}</p> {/* Mostramos las notas del horario */}
    </div>
  </div>
);

const Attention = () => {
  const [contact, setContact] = useState<AttentionData | null>(null);

  useEffect(() => {
    // Asignamos los datos del JSON al estado del componente
    setContact(attentionData);
  }, []);

  if (!contact) return <div>Cargando...</div>;

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-[#262D48] rounded-lg shadow-lg">
      {/* Mapa de Google */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-10 text-black dark:bg-[#3d2a3b] dark:text-white">
        <h3 className="text-2xl font-semibold text-lila-500 dark:text-lila-400 mb-5">{contact.location.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-5">{contact.location.description}</p>

        {/* Imagen representativa de la oficina */}
        <div className="mb-6">
          <img src={contact.location.image} alt="Oficina Núcleo Linux UAGRM" className="w-full h-auto rounded-lg" />
        </div>

        {/* Mapa Embed de Google */}
        <div className="w-full h-64 bg-gray-600 rounded-md mb-6">
          <iframe
            src={contact.location.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        {/* Dirección */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Dirección:</h4>
          <p className="text-gray-600 dark:text-gray-300">
            {contact.location.addressDetails.street}, {contact.location.addressDetails.city}, {contact.location.addressDetails.state}, {contact.location.addressDetails.country} - {contact.location.addressDetails.zipCode}
          </p>
        </div>
      </div>

      {/* Horarios de Atención */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-10 text-black dark:bg-[#3d2a3b] dark:text-white">
        <h3 className="text-2xl font-semibold text-lila-500 dark:text-lila-400 mb-5 flex items-center">
          <i className="bx bx-time text-3xl mr-3"></i>
          Horario de Atención Núcleo Linux UAGRM
        </h3>

        {/* Horarios */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Horario de Atención</h2>

          {/* Usar el componente HorarioAtencion */}
          {contact.officeHours.map((item, index) => (
            <HorarioAtencion
              key={index}
              dia={item.day}
              hora={item.time}
              encargado={item.inCharge}
              notas={item.notes}  // Añadimos las notas del horario
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default Attention;
