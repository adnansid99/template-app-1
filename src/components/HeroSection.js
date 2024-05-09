export default function HeroSection() {
  return (
    <header>
      <img
        src="https://source.unsplash.com/random/1920x900/?bike road"
        alt="hero"
        className="w-full max-h-[70dvh] object-cover object-center rounded-md"
      />
      <div className="flex items-center justify-between px-4 py-24 max-w-[1250px] mx-auto">
        <h1 className="text-6xl font-bold max-w-[50%]">
          Welcome to our Bike Showroom
        </h1>
        <div className="flex  flex-col items-start justify-center gap-6">
          <h6 className="text-xl">
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
    </header>
  );
}
