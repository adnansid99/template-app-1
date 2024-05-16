export default function Features2(props) {
  const {
    isReverse = false,
    label = "Ride in Style and Power",
    title = "Mountain Bikes",
    description = "Explore the great outdoors with our range of durable and high-performance mountain bikes. Designed to tackle rough terrains and steep inclines, these bikes are perfect for adventure seekers.",
    imageSrc = "https://source.unsplash.com/random/600x500/?sports bikes",
  } = props;

  return (
    <section className="container w-full mx-auto px-8 py-20 flex items-center justify-center">
      {/* <h2 className="text-3xl md:text-5xl font-bold">What we provide?</h2> */}
      <div
        className={`flex xl:aspect-[16/6] flex-col-reverse justify-between overflow-hidden items-center xl:w-full bg-slate-200 bg-opacity-70 rounded-3xl ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="flex pb-6 pt-6 lg:pt-0 px-6 xl:pb-10 xl:px-10 xl:p-20 flex-col gap-4 w-full xl:w-1/2 xl:gap-8">
          <p className="text-sm text-gray-700 xl:text-base">{label}</p>
          <h2 className="text-2xl xl:text-4xl -mt-2 xl:-mt-4 font-bold">
            {title}
          </h2>
          <p className="text-sm text-gray-700 xl:text-base">{description}</p>
        </div>
        <img
          src={imageSrc}
          alt="features"
          className="w-full h-72 lg:w-1/2 lg:h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </section>
  );
}
