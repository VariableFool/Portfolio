function Header() {
  return (
    <header className="z-10 absolute top-0 left-1/2 transform -translate-x-1/2 flex mt-10 px-2 py-2 bg-transparent rounded-2xl ring-2 ring-gray-700 hover:ring-blue-500 transition shadow-lg">
      <nav className="space-x-2 items-center flex transition">
        <a
          href="#about"
          className="hover:bg-blue-500 hover:text-white px-2 py-1 rounded-xl transition whitespace-nowrap"
        >
          Обо мне
        </a>
        <a
          href="#projects"
          className="hover:bg-blue-500 hover:text-white px-2 py-1 rounded-xl transition"
        >
          Проекты
        </a>
        <a
          href="#contact"
          className="hover:bg-blue-500 hover:text-white px-2 py-1 rounded-xl transition"
        >
          Контакты
        </a>
      </nav>
    </header>
  );
}

export default Header;
