// src/components/Footer.tsx
const Footer = () => {
  return (
<footer className="bg-[#390d30] dark:bg-[#762763] text-[#f1f0f1] dark:text-[#f1f0f1] py-8">
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
      <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/nucleo_linux_logo.png"
            className="h-16"
            alt="Núcleo Linux UAGRM"
          />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
        {[
          {
            title: "Recursos",
            links: [
              { name: "Eventos", href: "https://www.instagram.com/nucleolinuxuagrm" },
              { name: "Comunidad", href: "https://www.instagram.com/nucleolinuxuagrm" },
            ],
          },
          {
            title: "Síguenos",
            links: [
              { name: "Facebook", href: "https://www.facebook.com/nucleolinuxuagrm" },
              { name: "Instagram", href: "https://www.instagram.com/nucleolinuxuagrm" },
            ],
          },
          {
            title: "Legal",
            links: [
              { name: "Política de Privacidad", href: "#" },
              { name: "Términos y Condiciones", href: "#" },
            ],
          },
        ].map((section) => (
          <div key={section.title} className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase text-[#f1f0f1]">
              {section.title}
            </h2>
            <ul>
              {section.links.map((link) => (
                <li key={link.name} className="mb-2">
                  <a
                    href={link.href}
                    className="hover:underline text-[#f1f0f1]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <hr className="my-6 border-[#884083] dark:border-[#f1f0f1]" />

    <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:justify-between">
      <span className="text-sm">
        © 2025 Núcleo Linux UAGRM. Todos los derechos reservados.
      </span>

      <div className="flex space-x-5 mt-4 sm:mt-0">
        {[
          { href: "https://www.facebook.com/nucleolinuxuagrm", icon: "bxl-facebook", label: "Facebook" },
          { href: "https://www.instagram.com/nucleolinuxuagrm", icon: "bxl-instagram", label: "Instagram" },
          { href: "https://www.linkedin.com/company/nucleolinuxuagrm/", icon: "bxl-linkedin", label: "LinkedIn" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="text-[#f1f0f1] hover:text-[#884083] text-2xl"
          >
            <i className={`bx ${social.icon}`}></i>
            <span className="sr-only">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
