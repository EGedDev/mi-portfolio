import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { experience } from "../data";

const Experience = () => {
  return (
   <section
     id="experiencia"
     className="
     py-20
     px-6
     "
   >
      <div className="max-w-5xl mx-auto">

        {/* Encabezado de sección */}
        <div className="mb-16">

          <div
            className="
            flex
            items-center
            gap-4
            mb-4
            "
          >
            <FaBriefcase
              className="
              text-[#d4c26a]
              text-2xl
              "
            />

            <h2
              className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              "
            >
              Experiencia laboral
            </h2>
          </div>

          <p
            className="
            text-slate-400
            text-lg
            "
          >
          </p>

        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Línea vertical */}
          <div
            className="
            absolute
            left-[7px]
            top-2
            bottom-2
            w-px
            bg-gradient-to-b
            from-[#d4c26a]/70
            via-[#d4c26a]/30
            to-transparent
            "
          />


          <div className="space-y-10">

            {experience.map((exp, idx) => (

              <div
                key={idx}
                className="
                relative
                pl-10
                "
              >

                {/* Punto de la timeline */}
                <div
                  className="
                  absolute
                  left-0
                  top-6

                  w-[15px]
                  h-[15px]

                  rounded-full

                  border-2
                  border-[#d4c26a]

                  bg-[#0b0f1a]

                  shadow-[0_0_12px_rgba(212,194,106,0.12)]
                  "
                />


                {/* Tarjeta */}
                <div
                  className="
                  bg-white/[0.025]

                  border
                  border-white/[0.08]

                  rounded-2xl

                  p-7

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-[#d4c26a]/20
                  hover:bg-white/[0.035]
                  "
                >

                  <div
                    className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-start
                    md:justify-between

                    gap-4
                    "
                  >

                    {/* Información principal */}
                    <div>

                      <h3 className="text-2xl font-bold text-[#d4c26a]">
                        {exp.role}
                      </h3>

                      <p className="text-slate-300 mt-2">
                        {exp.company}
                      </p>

                    </div>


                    {/* Periodo */}
                    <span
                      className="
                      self-start

                      px-3
                      py-1.5

                      rounded-full

                      bg-white/[0.05]

                      text-slate-400

                      text-xs
                      font-medium

                      whitespace-nowrap
                      "
                    >
                      {exp.period}
                    </span>

                  </div>


                  {/* Descripción */}
                  <p
                    className="
                    text-slate-400

                    leading-relaxed

                    mt-6
                    "
                  >
                    {exp.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;