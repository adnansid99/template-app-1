export default function HeroSection2() {
  return (
    <header className="relative">
      <img
        src="https://source.unsplash.com/random/1920x900/?bike road"
        alt="hero"
        className="w-full max-h-[calc(100dvh_-_96px)] object-cover object-center rounded-md"
      />
      <div className="absolute top-0 w-full h-full">
        <div className="flex flex-col items-center justify-around gap-4 container my-auto h-full">
          <h1 className="text-7xl font-bold text-white">
            Welcome to our Bike Showroom
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 bg-white bg-opacity-50 backdrop-blur-sm  rounded-lg px-12 py-8">
            <h6 className="text-xl font-semibold">
              Explore our widerange of bikes for every type of rider
            </h6>
            <div className="flex items-center justify-end gap-4">
              <button className="border-[1px] border-orange-700 text-white rounded-2xl bg-orange-700 px-4 text-sm font-medium py-1">
                Contact Us
              </button>
              <button className="border-[1px] border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
