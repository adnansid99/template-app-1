export default function Features1(props) {
  const {
    isReverse = false,
    label = "This is a label",
    title = "Bikes Title",
    description = "Desctiption about the bikes.",
    imageSrc = "https://source.unsplash.com/random/600x400/?sports bikes",
  } = props;

  return (
    <section
      className={`px-8 mx-auto container py-20 flex flex-col gap-10 items-center ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img
        src={imageSrc}
        alt="features"
        className="rounded-lg md:w-1/2 object-cover aspect-video object-center"
        loading="lazy"
      />
      <div className="flex lg:p-14 md:w-1/2 flex-col gap-4 md:gap-8">
        <p className="text-sm -mb-4 text-gray-700 lg:text-base">{label}</p>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">{title}</h2>
        <p className="text-sm lg:text-base">{description}</p>
      </div>
    </section>
  );
}
