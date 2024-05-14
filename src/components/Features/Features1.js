export default function Features1(props) {
  const {
    isReverse = false,
    label = "This is a label",
    title = "Bikes Title",
    description = "Desctiption about the bikes.",
    imageSrc = "https://source.unsplash.com/random/500x300/?sports bikes",
  } = props;

  return (
    <section
      className={`container py-20 flex flex-col gap-10 md:gap-20 items-center justify-between ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img
        src={imageSrc}
        alt="features"
        className="rounded-lg object-cover aspect-video object-center"
        loading="lazy"
      />
      <div className="flex flex-col gap-4 md:gap-8">
        <p className="text-sm md:text-base">{label}</p>
        <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </section>
  );
}
