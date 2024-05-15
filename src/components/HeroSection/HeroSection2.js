export default function HeroSection2(props) {
  const {
    backgroundImg = "https://source.unsplash.com/random/1920x900/?bike road",
    title = "Welcome to our Bike Showroom",
    subTitle = "Explore our widerange of bikes for every type of rider",
    button1 = "Contact Us",
    button2 = "View Collection",
  } = props;

  return (
    <header className="container min-h-screen flex flex-col py-20 sm:py-24 gap-20 items-center justify-center">
      <div className="flex  flex-col items-center justify-center w-full text-center  gap-8">
        <h1 className="text-4xl md:text-7xl font-extrabold">{title}</h1>
        <div className="flex flex-col items-center justify-center gap-6">
          <h6 className="text-xl">{subTitle}</h6>
          <div className="flex items-center justify-center gap-4">
            <button className="border border- text-white rounded-2xl bg-teal-600 px-6 text-sm font-medium py-2">
              {button1}
            </button>
            <button className="border border-teal-600 px-6 rounded-2xl text-teal-600 text-sm font-medium py-2">
              {button2}
            </button>
          </div>
        </div>
      </div>
      <img
        src={backgroundImg}
        alt="hero"
        className="w-full object-cover object-center border shadow-lg rounded-full"
        loading="lazy"
      />
    </header>
  );
}
