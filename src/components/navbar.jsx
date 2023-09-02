const Navbar = () => {
  return (
    <nav className="sticky flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 bg-gradient-to-l from-slate-800 to-slate-900">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a
            className="text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-blue-300"
            href="#"
          >
            <h1>Rocket Science</h1>
            <p className="text-sm text-gray-400 lg:block text-justify">Hazem For BrainStorm </p>
          </a>
        </div>
        <p className="text-sm text-stone-400 hidden lg:block text-justify">
          Welcome to Rocket Science! This is a full-stack web application that allows users to search for SpaceX rockets
          and capsules.
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
