export default function HeroSection1({ props }) {
  const {
    backgroundImg = "https://source.unsplash.com/random/500x500/?bike road",
    title = "Welcome to our Bike Showroom",
    subTitle = "Explore our widerange of bikes for every type of rider",
    button1 = "Contact Us",
    button2 = "View Collection",
  } = props;

  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="container mx-auto flex py-20 px-8 gap-16 justify-center lg:justify-between items-center flex-row">
        <div className="flex flex-col gap-8 max-w-3xl justify-center text-center lg:text-left lg:items-start items-center">
          <h1 className="text-3xl text-black dark:text-white font-bold lg:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 lg:text-lg">
            {subTitle}
          </p>
          <div className="flex items-center gap-4">
            <button className="text-nowrap rounded-2xl border-purple-700 bg-purple-700 px-6 py-2 text-sm font-medium text-white">
              {button1}
            </button>
            <button className="text-nowrap rounded-2xl border border-purple-700 bg-transparent px-6 py-2 text-sm font-medium text-purple-700">
              {button2}
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block max-w-sm xl:max-w-md rounded-lg  aspect-square mr-4">
          <div className="absolute rounded-lg -left-4 -bottom-4 z-0 w-40 h-40 bg-purple-700" />
          <img
            src={backgroundImg}
            alt="hero"
            className="w-full relative h-full z-10 rounded-lg object-cover object-center"
            loading="lazy"
          />
          <div className="absolute rounded-lg -right-4 -top-4 z-0 w-40 h-40 bg-purple-700" />
        </div>
      </div>
    </section>
  );
}
