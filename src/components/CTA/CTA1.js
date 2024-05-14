export default function CTA1(props) {
  const {
    title = "Find Your Perfect Ride",
    subTitle = "Explore our wide range of bikes and find the one that suits your style and needs.",
    button1 = "Browse Bikes",
    button2 = "Contact Us",
  } = props;

  return (
    <section className="gap-6 container flex flex-col items-center text-center justify-center py-20">
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      <p className="text-sm md:text-base">{subTitle}</p>
      <div className="flex items-center justify-end gap-4">
        <button className="border border-orange-700 text-white rounded-2xl bg-orange-700 px-4 text-sm font-medium py-1">
          {button1}
        </button>
        <button className="border border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
          {button2}
        </button>
      </div>
    </section>
  );
}
