export default function Features1({ props }) {
  const {
    isReverse = false,
    label = "Ride in Style and Power",
    title = "Mountain Bikes",
    description = "Explore the great outdoors with our range of durable and high-performance mountain bikes. Designed to tackle rough terrains and steep inclines, these bikes are perfect for adventure seekers.",
    imageSrc = "https://source.unsplash.com/random/600x400/?sports bikes",
  } = props;

  return (
    <section className="bg-white dark:bg-gray-950">
      <div
        className={`container mx-auto flex flex-col items-center gap-10 px-8 py-20 ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <img
          src={imageSrc}
          alt="features"
          className="aspect-video rounded-lg object-cover object-center lg:w-1/2"
          loading="lazy"
        />
        <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-8 lg:p-14">
          <p className="-mb-4 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
            {label}
          </p>
          <h2 className="text-3xl text-black dark:text-white font-bold md:text-4xl">
            {title}
          </h2>
          <p className="text-sm dark:text-gray-200 text-gray-600 lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
