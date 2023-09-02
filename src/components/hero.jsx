const Hero = () => {
  return (
    <section>
      <div className="bg-gradient-to-b from-slate-900 to-slate-blue py-20 rounded-t-xl ">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl text-blue-500 tracking-loose">Discover Rockets</h1>
            <h2 className="text-3xl md:text-5xlleading-relaxed md:leading-snug mb-2 text-gray-200">
              Space : The Timeless Infinity
            </h2>
            <p className="text-sm md:text-base mb-4 text-stone-300 p-2">
              Explore SpaceX capsules and rockets and learn more about them.
            </p>
            <a
              href="#capsule-search"
              className="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-red-200 rounded shadow hover:shadow-lg py-2 px-4 border border-blue-500 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img
                  className="inline-block mt-28 hidden xl:block"
                  src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-28 hidden lg:block"
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="facts bg-gradient-to-t from-slate-900 to-slate-900 py-20 p-t">
        <h2 className="text-4xl font-bold p-2 text-stone-200">SpaceX Facts</h2>
        <div className="text-zinc-400 bg-gradient-to-r from-slate-600 to-indigo-600 bg-clip-text text-transparent text-gray-600 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4">
            <h2 className="text-3xl font-bold p-2">Company Overview</h2>
            <p className="p-3 text-l">
              SpaceX, also known as Space Exploration Technologies Corp., is an American aerospace manufacturer and
              space transportation company founded by Elon Musk in 2002.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-3xl font-bold p-2">Innovative Rockets</h2>
            <p className="p-3 text-l">
              SpaceX is known for its innovative approach to rocket design, including the development of the Falcon 1,
              Falcon 9, and Falcon Heavy launch vehicles.
            </p>
          </div>

          <div className="p-4">
            <h2 className="text-3xl font-bold p-2">Satellite Internet</h2>
            <p className="p-3 text-l">
              SpaceX is also involved in the Starlink project, aiming to provide global internet coverage through a
              constellation of satellites in low Earth orbit.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Hero;
