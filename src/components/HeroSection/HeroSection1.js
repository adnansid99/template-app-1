export default function HeroSection1(props) {
  const {
    backgroundImg = "https://source.unsplash.com/random/1920x900/?bike road",
    title = "Welcome to our Bike Showroom",
    subTitle = "Explore our widerange of bikes for every type of rider",
    button1 = "Contact Us",
    button2 = "View Collection",
  } = props;

  return (
    <section>
      <img
        src={backgroundImg}
        alt="hero"
        className="max-h-[50dvh] w-full object-cover object-center"
        loading="lazy"
      />
      <div className="container mx-auto flex w-full flex-col items-center justify-between gap-14 px-8 py-20 text-center lg:flex-row lg:text-left">
        <h1 className="text-3xl font-bold md:text-5xl lg:w-1/2">{title}</h1>
        <div className="flex flex-col items-center justify-center gap-6 lg:w-1/2 lg:items-start">
          <h6 className="text-base lg:text-xl">{subTitle}</h6>
          <div className="flex items-center justify-end gap-4">
            <button className="text-nowrap rounded-2xl border border-orange-700 bg-orange-700 px-4 py-1 text-sm font-medium text-white">
              {button1}
            </button>
            <button className="text-nowrap rounded-2xl border border-orange-700 bg-white px-4 py-1 text-sm font-medium text-orange-700">
              {button2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
