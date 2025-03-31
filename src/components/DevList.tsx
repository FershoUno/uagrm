import { useState } from 'react';
import { Dev } from '../types';
import DevCard from './DevCard';
import devsData from '../data/devs.json';

const DevList = () => {
  // Estado de la búsqueda y filtro
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>(''); // Filtro por área de colaboración
  const [selectedTech, setSelectedTech] = useState<string>(''); // Filtro por herramienta/tecnología

  // Configuración de la paginación
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrar los desarrolladores según la búsqueda y los filtros seleccionados
  const filteredDevs = devsData.filter((dev) => {
    const matchesSearchQuery =
      dev.nombre_completo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.sobre_ti.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesArea = selectedArea ? dev.area_colaboracion === selectedArea : true;
    const matchesTech = selectedTech ? dev.herramientas_tecnologias.includes(selectedTech) : true;

    return matchesSearchQuery && matchesArea && matchesTech;
  });

  // Calcular los índices de los elementos a mostrar según la página actual
  const indexOfLastDev = currentPage * itemsPerPage;
  const indexOfFirstDev = indexOfLastDev - itemsPerPage;
  const currentDevs = filteredDevs.slice(indexOfFirstDev, indexOfLastDev);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredDevs.length / itemsPerPage);

  // Función para cambiar de página
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filtros de búsqueda y tecnología */}
<div className="mb-4 flex flex-col sm:flex-row justify-between items-center w-full gap-4">
  {/* Campo de Búsqueda */}
  <div className="relative w-full sm:w-2/3">
    <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 text-lg"></i>
    <input
      type="text"
      placeholder="Buscar teams..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="pl-10 pr-4 py-2 w-full rounded-md shadow-md focus:ring-2 focus:ring-clientLightEnableBorderColor dark:bg-clientDarkSecondary dark:text-clientDarkTextColor dark:focus:ring-clientDarkEnableBorderColor transition-all duration-200 ease-in-out"
    />
  </div>

  {/* Filtros */}
  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
    {/* Filtro por Área */}
    <select
      value={selectedArea}
      onChange={(e) => setSelectedArea(e.target.value)}
      className="p-3 w-full sm:w-auto text-clientLightTextColor rounded-md shadow-md hover:bg-clientLightHover focus:ring-2 focus:ring-clientLightEnableBorderColor focus:outline-none dark:bg-clientDarkSecondary dark:text-clientDarkTextColor dark:hover:bg-clientDarkHover dark:focus:ring-clientDarkEnableBorderColor transition duration-200 ease-in-out"
    >
      <option value="">Filtrar por Área</option>
      <option value="Investigación y Desarrollo">Investigación y Desarrollo</option>
      <option value="Marketing">Marketing</option>
      <option value="Legal">Legal</option>
      <option value="Finanzas">Finanzas</option>
      <option value="Finanzas">Logística</option>

      
      {/* Agregar más opciones según las áreas disponibles */}
    </select>
    
    {/* Filtro por Tecnología */}
    <select
      value={selectedTech}
      onChange={(e) => setSelectedTech(e.target.value)}
      className="p-3 w-full sm:w-auto rounded-md shadow-md focus:ring-2 focus:ring-clientLightEnableBorderColor focus:outline-none dark:bg-clientDarkSecondary dark:text-clientDarkTextColor dark:hover:bg-clientDarkHover dark:focus:ring-clientDarkEnableBorderColor transition duration-200 ease-in-out"
    >
      <option value="">Filtrar por Skills Tech</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="Python">Python</option>
        <option value="SQL">SQL</option>
        <option value="Figma">Figma</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Dart">Dart</option>
        <option value="Excel">Excel</option>
        <option value="Power BI">Power BI</option>
        
            {/* Agregar más opciones según las tecnologías disponibles */}
    </select>
  </div>
</div>


      {/* Lista de Desarrolladores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{currentDevs.map((dev) => (
  <DevCard key={dev.id} dev={dev as Dev} />
))}

      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-clientLightPrimary text-clientLightTextColor rounded-l-lg hover:bg-clientLightEnableBorderColor focus:outline-none dark:bg-clientDarkPrimary dark:text-clientDarkTextColor dark:hover:bg-clientDarkEnableBorderColor"
        >
          Anterior
        </button>

        {/* Páginas numeradas */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`p-2 mx-1 rounded-lg 
              ${currentPage === index + 1 ? 'bg-clientDarkButtonColor text-clientDarkTextColor' : 'bg-clientLightPrimary text-clientLightTextColor'} 
               dark:hover:bg-clientDarkTableColor dark:focus:bg-clientDarkButtonColor`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastDev >= filteredDevs.length}
          className="p-2 bg-clientLightPrimary rounded-r-lg hover:bg-clientLightEnableBorderColor focus:outline-none dark:hover:bg-clientDarkEnableBorderColor"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default DevList;
