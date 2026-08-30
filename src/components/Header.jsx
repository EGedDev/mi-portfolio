import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = [
        "inicio",
        "experiencia",
        "proyectos",
        "habilidades",
        "certificaciones",
        "about",
        "contacto",
      ];

      let currentSection = "inicio";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 180 && rect.bottom >= 180) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    { name: "Inicio", id: "inicio" },
    { name: "Experiencia", id: "experiencia" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Habilidades", id: "habilidades" },
    { name: "Certificaciones", id: "certificaciones" },
    { name: "Sobre Mí", id: "about" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        flex
        justify-center
        px-4
        pointer-events-none
      "
    >
      <nav
        className={`
          pointer-events-auto

          flex
          items-center
          gap-7

          px-7
          py-3

          rounded-full

          transition-all
          duration-500
          ease-out

          ${
            scrolled
              ? `
                translate-y-3
                bg-[#10131d]/70
                border
                border-white/[0.08]
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.15)]
              `
              : `
                translate-y-3
                bg-transparent
                border
                border-transparent
                backdrop-blur-none
                shadow-none
              `
          }
        `}
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              text-sm
              font-medium
              whitespace-nowrap
              transition-colors
              duration-300

              ${
                activeSection === item.id
                  ? "text-[#d4c26a]"
                  : "text-slate-400 hover:text-white"
              }
            `}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;