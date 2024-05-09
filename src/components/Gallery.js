export default function Gallery() {
  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center text-center gap-6 max-w-[1250px] mx-auto">
      <div>
        <h2 className="text-4xl font-semibold mb-4">
          Explore Our Bike Gallery
        </h2>
        <p className="text-base">
          Browse through our collection of high-quality bikes available for sale
        </p>
      </div>
      <div className="flex items-center justify-between gap-10 w-full">
        <img
          src="https://source.unsplash.com/random/315x215/?bike gallery"
          alt="bike"
          className="w-96 rounded-md "
        />
        <img
          src="https://source.unsplash.com/random/320x220/?bike gallery"
          alt="bike"
          className="w-96 rounded-md "
        />
        <img
          src="https://source.unsplash.com/random/325x225/?bike gallery"
          alt="bike"
          className="w-96 rounded-md "
        />
      </div>
    </section>
  );
}
