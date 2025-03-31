import DevList from "../components/DevList";
const DevPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Sección de título principal */}
      <div className="text-center mb-1">
        <h1 className="text-4xl font-extrabold text-clientLightTextColor dark:text-clientDarkTextColor mb-4">
          Nuestro Equipo de Innovadores
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Conoce a los apasionados desarrolladores, diseñadores y mentes
          creativas que hacen posible este proyecto.
        </p>
      </div>

      {/* Mostrar la lista de desarrolladores */}
      <DevList />
    </div>
  );
};

export default DevPage;
