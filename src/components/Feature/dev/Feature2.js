export default function Feature2({ props }) {
  const {
    isReverse = false,
    label = "This is a label",
    title = "Bikes Title",
    description = "Desctiption about the bikes.",
    imageSrc = "https://source.unsplash.com/random/600x600/?sports bikes",
  } = props;

  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="container mx-auto flex items-center justify-center px-8 py-20">
        <div
          className={`flex aspect-auto h-full xl:min-h-96 flex-col-reverse items-center justify-between gap-8 min-h-80 overflow-hidden rounded-3xl dark:bg-gray-900 bg-slate-200 bg-opacity-70 md:w-full xl:aspect-[16/5] ${
            isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="xl:p-15 flex w-full flex-col gap-4 px-10 pb-10 md:gap-8 lg:w-1/2 lg:p-10">
            <p className="-mb-4 text-sm text-gray-700 dark:text-gray-300 xl:text-base">
              {label}
            </p>
            <h2 className="text-2xl font-bold text-black dark:text-white xl:text-4xl">
              {title}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 xl:text-base">
              {description}
            </p>
          </div>
          <img
            src={imageSrc}
            alt="features"
            className="aspect-video w-full object-cover object-center lg:aspect-square lg:w-1/2"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
