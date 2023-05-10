import Header from "./components/Header";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-10 cursor-default my-16">
      <Header />
      <section className="flex flex-col gap-6 w-1/2 max-[750px]:w-full">
        <p className="text-3xl font-semibold text-slate-50">
          El repositorio en el que puedes encontrar los comandos, metodos de
          arrays y de strings, mas usados al desarrollar con las tecnologias y
          lenguajes mas famosos del mercado.
        </p>
        <p className="text-2xl">Preparate para navegar entre lenguajes.</p>
      </section>
    </div>
  );
};

export default Home;
