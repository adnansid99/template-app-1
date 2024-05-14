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
      className={`container py-24 flex gap-28 items-center justify-between ${
        isReverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img
        src={imageSrc}
        alt="features"
        className="rounded-lg object-cover object-center"
        loading="lazy"
      />
      <div className="flex flex-col gap-8">
        <p className="text-base">{label}</p>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-base">{description}</p>
      </div>
    </section>
  );
}
