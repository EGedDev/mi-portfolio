import { projects } from "../data";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="
        py-20
        px-6
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <div className="mb-10">

          <div className="flex items-center gap-3 mb-3">
            <FiCode className="text-[#d4c26a] text-xl" />

            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
              "
            >
              Proyectos
            </h2>
          </div>

          <p
            className="
              max-w-2xl
              text-slate-400
              text-base
              leading-relaxed
            "
          >
            Una selección de proyectos donde aplico desarrollo
            backend, diseño de APIs y buenas prácticas de ingeniería
            de software.
          </p>

        </div>

        {/* Proyectos */}
        <div className="space-y-6">

          {projects.map((project, idx) => (
            <article
              key={idx}
              className="
                group

                grid
                md:grid-cols-[300px_1fr]

                gap-7

                p-5
                md:p-6

                rounded-2xl

                bg-white/[0.025]

                border
                border-white/[0.08]

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-[#d4c26a]/20
                hover:bg-white/[0.035]
              "
            >

              {/* Imagen */}
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-xl

                  border
                  border-white/[0.08]

                  bg-[#111827]

                  h-56
                  md:h-60

                  flex
                  items-center
                  justify-center
                "
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="
                      w-full
                      h-full

                      object-contain

                      transition-transform
                      duration-500

                      group-hover:scale-[1.02]
                    "
                  />
                ) : (
                  <div
                    className="
                      w-full
                      h-full

                      flex
                      items-center
                      justify-center

                      bg-gradient-to-br
                      from-slate-900
                      via-slate-900
                      to-indigo-950

                      text-slate-500
                    "
                  >
                    <FiCode className="text-4xl" />
                  </div>
                )}
              </div>

              {/* Información */}
              <div
                className="
                  flex
                  flex-col
                  justify-center
                "
              >

                {/* Título */}
                <h3
                  className="
                    text-xl
                    md:text-2xl

                    font-bold

                    text-[#d4c26a]

                    leading-tight

                    mb-3
                  "
                >
                  {project.name}
                </h3>

                {/* Descripción */}
                <p
                  className="
                    text-slate-300

                    text-sm
                    md:text-base

                    leading-relaxed

                    mb-5
                  "
                >
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2

                    mb-5
                  "
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5
                        py-1

                        rounded-full

                        bg-[#d4c26a]/[0.06]

                        border
                        border-[#d4c26a]/15

                        text-[#d4c26a]

                        text-xs
                        font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex flex-wrap gap-2.5">

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2

                      px-4
                      py-2

                      rounded-lg

                      border
                      border-white/10

                      bg-white/[0.03]

                      text-slate-300

                      text-sm

                      hover:text-white
                      hover:bg-white/[0.06]
                      hover:border-white/20

                      transition-all
                      duration-300
                    "
                  >
                    <FiGithub className="text-base" />
                    GitHub
                  </a>

                  {project.preview &&
                    project.preview !== "#" && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2

                          px-4
                          py-2

                          rounded-lg

                          bg-[#d4c26a]

                          text-[#101217]

                          text-sm
                          font-medium

                          hover:brightness-105

                          transition-all
                          duration-300
                        "
                      >
                        <FiExternalLink className="text-base" />
                        Preview
                      </a>
                    )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;