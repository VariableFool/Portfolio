function Hero() {
  return (
    <section className="flex flex-col items-start justify-center px-44">
      <h1 className="text-3xl sm:text-6xl font-bold mb-8 leading-tight">
        Привет <br />Я{' '}
        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
          Гаврил Гуляев
        </span>
      </h1>

      <p className="font-bold text-lg sm:text-xl mb-6 bg-blue-600/30 px-4 py-2 rounded-2xl">
        Frontend / Fullstack разработчик
      </p>

      <p className="text-gray-300 mb-6 text-xl">
        Я начинающий fullstack разработчик. Умею работать с React, Vue, Nuxt, Express и Python.
        <br />
        Люблю создавать красивые и удобные интерфейсы, а также настраивать backend-логику.
      </p>

      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
      >
        Смотреть проекты
      </a>
    </section>
  );
}

export default Hero;
