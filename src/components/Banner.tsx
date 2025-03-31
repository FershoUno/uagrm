import { useState, useEffect } from "react"; // Solo importamos los hooks necesarios
import bannerData from '../data/banner.json'; // Importar el archivo JSON
 // Importamos el tipo BannerData

// Componente para enlaces de redes sociales
const SocialLink = ({
  href,
  iconClass,
  ariaLabel,
}: {
  href: string;
  iconClass: string;
  ariaLabel: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform text-clientLightTextColor transition-all duration-300 hover:scale-110 hover:text-clientLightButtonColor dark:hover:text-clientLightButtonColor"
    aria-label={ariaLabel}
  >
    <i className={iconClass} />
  </a>
);

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar la imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.banner.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
<section
  className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-6 md:py-8"
  style={{ backgroundImage: `url('${bannerData.banner.images[currentIndex]}')` }}
  id="home"
>
  {/* Fondo con opacidad para que se vea más la imagen */}
  <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

  {/* Contenedor del contenido con bordes redondeados y más pequeño */}
  <div className="relative z-10 max-w-md mx-auto rounded-2xl bg-white/70 dark:bg-[#3a0032] p-8 text-center shadow-lg">
    {/* Título */}
    <p className="mb-4 text-lg font-semibold uppercase text-[#762763] dark:text-[#f1f0f1]">
      {bannerData.banner.title}
    </p>

    {/* Subtítulo */}
    <h2 className="mb-4 text-3xl font-extrabold text-[#762763] dark:text-[#f1f0f1]">
      {bannerData.banner.subtitle}
      <br />
      <span className="text-[#762763] text-lg dark:text-[#f1f0f1]">
        {bannerData.banner.description}
      </span>
    </h2>

    {/* Cita */}
    <p className="mb-4 text-lg font-light text-[#3a0032] dark:text-[#f1f0f1]">
      {bannerData.banner.quote}
    </p>

    {/* Botón CTA */}
    <a
      href={bannerData.banner.ctaLink}
      className="inline-block rounded-lg bg-[#762763] px-6 py-2 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#884083] dark:bg-[#884083] dark:hover:bg-[#f1f0f1] dark:text-[#3a0032]"
    >
      {bannerData.banner.ctaText}
    </a>

    {/* Redes sociales */}
    <div className="mt-6 flex justify-center space-x-6">
      <SocialLink
        href="https://www.facebook.com/nucleolinuxuagrm"
        iconClass="bx bxl-facebook text-3xl text-[#762763] dark:text-[#f1f0f1]"
        ariaLabel="Facebook"
      />
      <SocialLink
        href="#"
        iconClass="bx bxl-twitter text-3xl text-[#762763] dark:text-[#f1f0f1]"
        ariaLabel="Twitter"
      />
      <SocialLink
        href="#"
        iconClass="bx bxl-instagram text-3xl text-[#762763] dark:text-[#f1f0f1]"
        ariaLabel="Instagram"
      />
    </div>
  </div>
</section>

  );
};

export default Banner;
