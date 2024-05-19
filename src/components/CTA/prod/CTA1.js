export default function CTA1({ props }) {
  const {
    title = "Find Your Perfect Ride",
    subTitle = "Explore our wide range of bikes and find the one that suits your style and needs.",
    button1 = "Browse Bikes",
    button2 = "Contact Us",
  } = props;

  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="gap-6 px-8 mx-auto container flex flex-col items-center text-center justify-center py-20">
        <h2 className="text-black dark:text-white text-3xl md:text-4xl font-semibold">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-200 md:text-base">
          {subTitle}
        </p>
        <div className="flex items-center justify-end gap-4">
          <button className="border border-purple-700 text-white rounded-2xl bg-purple-700 px-4 text-sm font-medium py-1">
            {button1}
          </button>
          <button className="border bg-transparent border-purple-700 px-4 rounded-2xl text-purple-700 text-sm font-medium py-1">
            {button2}
          </button>
        </div>
      </div>
    </section>
  );
}
