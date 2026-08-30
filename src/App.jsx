import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main
      className="
        relative
        min-h-screen
        bg-[#0b0d16]
        text-white
        overflow-hidden
      "
    >

      {/* Glow superior izquierdo */}
      <div
        className="
          fixed
          top-0
          left-0

          w-[600px]
          h-[600px]

          bg-blue-500/[0.07]

          blur-[180px]

          rounded-full

          pointer-events-none
        "
      />

      {/* Glow superior derecho */}
      <div
        className="
          fixed
          top-1/3
          right-0

          w-[550px]
          h-[550px]

          bg-purple-500/[0.07]

          blur-[180px]

          rounded-full

          pointer-events-none
        "
      />

      {/* Glow inferior */}
      <div
        className="
          fixed
          bottom-0
          left-1/4

          w-[450px]
          h-[450px]

          bg-cyan-500/[0.04]

          blur-[180px]

          rounded-full

          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10

          max-w-5xl
          mx-auto

          px-4
          md:px-6
        "
      >
        <Header />

        <Hero />

        <Experience />

        <Projects />


{/*
        <Skills />

        <Certifications />

        <About />

        */}

        <Footer />
      </div>

    </main>
  );
}

export default App;