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
            pt-40
            pb-20
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
                items-center
                gap-4
                mb-8
              "
            >
              <img
                src="/perfil.jpg"
                alt="Eli Garro"
                className="
                  w-16
                  h-16
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
                  py-1.5

                  rounded-full

                  border
                  border-blue-400/20

                  bg-blue-500/5

                  text-sm
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

                text-xl
                leading-relaxed

                mb-10
              "
            >
              Software Engineer especializado en desarrollo backend con Java y Spring Boot, enfocado en construir soluciones empresariales robustas, mantenibles y escalables. Con una visión integral del desarrollo de software, participo en la construcción de soluciones desde la arquitectura y los datos hasta las capas de backend y frontend.
            </motion.p>


            {/* BOTONES */}
            <motion.div
              className="
                flex
                gap-4
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
                  gap-3

                  px-5
                  py-2.5

                  rounded-lg

                  border
                  border-white/60

                  bg-transparent

                  text-white

                  hover:bg-white/10
                  hover:border-white

                  transition-all
                  duration-300
                "
              >
                <FaLinkedin className="text-lg" />

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
                  gap-3

                  px-5
                  py-2.5

                  rounded-lg

                  border
                  border-white/60

                  bg-transparent

                  text-white

                  hover:bg-white/10
                  hover:border-white

                  transition-all
                  duration-300
                "
              >
                <FaGithub className="text-lg" />

                GitHub
              </a>

            </motion.div>

          </div>
        </section>
      );
    }

    export default Hero;