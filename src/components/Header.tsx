import { useState, useEffect } from "react";
import { Link } from "wouter";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        !(event.target as HTMLElement).closest("#mobile-menu") &&
        !(event.target as HTMLElement).closest("#menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  // Función para manejar la navegación
  const handleNavigation = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  return (
<header className="bg-[#3A0032] dark:bg-black shadow-md p-4 flex justify-between items-center relative text-[#F1F0F1]">
  {/* Logo */}
  <div className="flex items-center space-x-4">
    <Link to="/">
      <img src="/WTM_Logo_Horizontal.png" alt="Logo Women" className="w-40 p-2" />
    </Link>
  </div>

  {/* Menú en dispositivos grandes */}
  <nav className="hidden md:flex space-x-6">
    <button onClick={() => handleNavigation("/")} className="hover:text-[#762763] transition-colors duration-300">Inicio</button>
     <button onClick={() => handleNavigation("/sobre-nosotros")} className="hover:text-[#762763] transition-colors duration-300">Sobre Nosotros</button>
    <button onClick={() => handleNavigation("/noticias")} className="hover:text-[#762763] transition-colors duration-300">Noticias</button>
    <button onClick={() => handleNavigation("/Attention")} className="hover:text-[#762763] transition-colors duration-300">Ubicación</button>
    <button onClick={() => handleNavigation("/contact")} className="hover:text-[#762763] transition-colors duration-300">Contacto</button>
  </nav>

  {/* Botón de hamburguesa (solo en móviles) */}
  <button id="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
    <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
  </button>

  {/* Fondo oscuro al abrir el menú */}
  {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}

  {/* Menú deslizante en móviles */}
  <div id="mobile-menu" className={`fixed top-0 right-0 w-2/3 h-full bg-[#3A0032] dark:bg-black shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50 flex flex-col justify-between py-6`}>
    <div className="flex flex-col items-center">
      <img src="/WTM_Logo_Horizontal.png" alt="Logo Women" className="w-40 p-2" />
    </div>

    <nav className="flex flex-col items-center space-y-6">
      <button onClick={() => handleNavigation("/")} className="hover:text-[#762763] transition-colors duration-300 text-lg">Inicio</button>
       <button onClick={() => handleNavigation("/sobre-nosotros")} className="hover:text-[#762763] transition-colors duration-300 text-lg">Sobre Nosotros</button>
      <button onClick={() => handleNavigation("/noticias")} className="hover:text-[#762763] transition-colors duration-300 text-lg">Noticias</button>
   
      <button onClick={() => handleNavigation("/ubicacion")} className="hover:text-[#762763] transition-colors duration-300 text-lg">Ubicación</button>
      <button onClick={() => handleNavigation("/contacto")} className="hover:text-[#762763] transition-colors duration-300 text-lg">Contacto</button>
    </nav>

    {/* Redes sociales */}
    <div className="flex justify-center space-x-6 pb-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300 text-2xl">
        <i className="bx bxl-facebook"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors duration-300 text-2xl">
        <i className="bx bxl-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300 text-2xl">
        <i className="bx bxl-instagram"></i>
      </a>
    </div>
  </div>
</header>

  );
};

export default Header;
