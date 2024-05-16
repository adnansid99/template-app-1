export default function CTA2({ props }) {
  const {
    title = "Find Your Perfect Ride",
    subTitle = "Explore our wide range of bikes and find the one that suits your style and needs.",
    button1 = "Browse Bikes",
    button2 = "Contact Us",
  } = props;

  return (
    <section className="container mx-auto px-8 py-20">
      <div className="gap-6 bg-slate-100 max-w-10/12 rounded-3xl border mx-auto flex flex-col items-center text-center justify-center p-10 md:p-20">
        <h2 className="text-3xl md:text-5xl font-semibold">{title}</h2>
        <p className="text-sm md:text-base">{subTitle}</p>
        <div className="flex flex-col w-full sm:w-10/12 md:w-1/2 items-center justify-end gap-4">
          <button className="border w-full border-teal-600 text-white rounded-xl bg-teal-600 px-10 text-sm font-medium py-3">
            {button1}
          </button>
          <button className="border w-full bg-transparent border-teal-600 px-10 rounded-xl text-teal-600 text-sm font-medium py-3">
            {button2}
          </button>
        </div>
      </div>
    </section>
  );
}
