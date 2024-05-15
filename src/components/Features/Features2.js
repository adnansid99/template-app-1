export default function Features2(props) {
  const {
    isReverse = false,
    label = "This is a label",
    title = "Bikes Title",
    description = "Desctiption about the bikes.",
    imageSrc = "https://source.unsplash.com/random/600x500/?sports bikes",
  } = props;

  return (
    <section className="container mx-auto px-8 py-20 flex items-center justify-center">
      {/* <h2 className="text-3xl md:text-5xl font-bold">What we provide?</h2> */}
      <div
        className={`flex flex-col-reverse justify-between overflow-hidden items-center gap-8 lg:w-full bg-slate-200 bg-opacity-70 rounded-3xl ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="flex pb-10 px-10 lg:p-20 flex-col gap-4 w-full lg:w-1/2 md:gap-8">
          <p className="text-sm text-gray-700 md:text-base">{label}</p>
          <h2 className="text-2xl md:text-5xl font-bold">{title}</h2>
          <p className="text-sm text-gray-700 md:text-base">{description}</p>
        </div>
        <img
          src={imageSrc}
          alt="features"
          className="w-full lg:w-1/2 aspect-video lg:aspect-auto object-cover lg:max-h-96 object-center"
          loading="lazy"
        />
      </div>
    </section>
  );
}
