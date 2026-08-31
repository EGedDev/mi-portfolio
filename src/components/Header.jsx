import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

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

        px-4
        md:flex
        md:justify-center

        pointer-events-none
      "
    >

      {/* ========================= */}
      {/* DESKTOP */}
      {/* ========================= */}

      <nav
        className={`
          pointer-events-auto

          hidden
          md:flex

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


      {/* ========================= */}
      {/* MOBILE */}
      {/* ========================= */}

      <div className="md:hidden w-full pointer-events-auto">

        <div
          className={`
            mt-4
            rounded-3xl

            ${
              menuOpen
                ? `
                  border
                  border-white/[0.10]
                  bg-[#10131d]/90
                  backdrop-blur-xl
                  shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                  px-7
                  py-6
                `
                : ""
            }
          `}
        >

          {/* BARRA SUPERIOR */}
          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            {/* LOGO */}
            <div
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Portfolio
            </div>

            {/* BOTÓN */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                text-white
                text-3xl
                leading-none
                p-2

                hover:text-[#d4c26a]

                transition-colors
              "
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>


          {/* LÍNEA + MENÚ */}
          {menuOpen && (
            <>
              <div
                className="
                  h-px
                  bg-white/[0.15]
                  my-6
                "
              />

              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-8
                  pb-4
                "
              >

                {items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      text-xl
                      font-medium
                      transition-colors
                      duration-300

                      ${
                        activeSection === item.id
                          ? "text-[#d4c26a]"
                          : "text-slate-300 hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </a>
                ))}

              </div>
            </>
          )}

        </div>

      </div>

    </header>
  );
}

export default Header;