import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personal } from "../data";

function Hero() {
  return (
    <section
      id="inicio"
      className="
        flex
        items-center
        px-6
        pt-32
        pb-20

        md:pt-40
        md:pb-20
      "
    >
      <div
        className="
          w-full
          max-w-4xl
          mx-auto
        "
      >

        {/* FOTO + DISPONIBLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            flex
            flex-col
            items-start
            gap-4
            mb-8

            md:flex-row
            md:items-center
          "
        >
          <img
            src="/perfil.jpg"
            alt="Eli Garro"
            className="
              w-24
              h-24

              md:w-16
              md:h-16

              rounded-full
              object-cover

              border
              border-white/10

              shadow-[0_0_20px_rgba(255,255,255,0.05)]
            "
          />

          <div
            className="
              px-4
              py-2

              rounded-full

              border
              border-blue-400/20

              bg-blue-500/5

              text-base
              md:text-sm

              text-slate-300

              whitespace-nowrap
            "
          >
            Disponible para trabajar
          </div>
        </motion.div>


        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-5xl
            md:text-6xl

            font-bold

            mb-6

            text-white

            leading-tight
          "
        >
          Hola, soy Eli
        </motion.h1>


        {/* DESCRIPCIÓN */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            max-w-3xl

            text-slate-300

            text-lg
            md:text-xl

            leading-relaxed

            mb-10
          "
        >
          <strong className="text-white">
            Software Engineer
          </strong>{" "}
          especializado en desarrollo backend con{" "}
          <strong className="text-white">
            Java y Spring Boot
          </strong>
          , enfocado en construir soluciones empresariales
          robustas, mantenibles y escalables.
        </motion.p>


        {/* BOTONES */}
        <motion.div
          className="
            flex
            flex-col
            gap-4

            md:flex-row
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >

          {/* LINKEDIN */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3

              w-full
              md:w-auto

              px-5
              py-3

              rounded-lg

              border
              border-white/20

              bg-white/[0.03]

              text-slate-300

              hover:text-white
              hover:bg-white/[0.06]
              hover:border-white/30

              transition-all
              duration-300
            "
          >
            <FaLinkedin className="text-xl" />

            LinkedIn
          </a>


          {/* GITHUB */}
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3

              w-full
              md:w-auto

              px-5
              py-3

              rounded-lg

              border
              border-white/20

              bg-white/[0.03]

              text-slate-300

              hover:text-white
              hover:bg-white/[0.06]
              hover:border-white/30

              transition-all
              duration-300
            "
          >
            <FaGithub className="text-xl" />

            GitHub
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;