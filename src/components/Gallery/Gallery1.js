export default function Gallery1({ props }) {
  const {
    title = "Explore Our Bike Gallery",
    subTitle = "Browse through our collection of high-quality bikes available for sale",
    galleryImages = [
      "https://source.unsplash.com/random/315x215/?bike gallery",
      "https://source.unsplash.com/random/320x220/?bike gallery",
      "https://source.unsplash.com/random/325x225/?bike gallery",
    ],
  } = props;

  return (
    <section className="py-20 flex flex-col items-center justify-center text-center gap-6 container px-8 mx-auto">
      <div>
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-base">{subTitle}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] items-center gap-10 w-full">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="bike"
            className="w-full rounded-md"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
