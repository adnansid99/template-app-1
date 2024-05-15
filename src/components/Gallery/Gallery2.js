export default function Gallery2(props) {
  const {
    title = "Explore Our Bike Gallery",
    subTitle = "Browse through our collection of high-quality bikes available for sale",
    galleryImages = [
      "https://source.unsplash.com/random/315x215/?bike gallery",
      "https://source.unsplash.com/random/320x220/?bike gallery",
      "https://source.unsplash.com/random/325x225/?bike gallery",
      "https://source.unsplash.com/random/335x235/?bike gallery",
    ],
  } = props;

  return (
    <section className="py-20 flex lg:flex-row flex-col items-center justify-center text-center gap-20 container">
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-sm md:text-lg">{subTitle}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,1fr))] lg:grid-cols-2 items-center gap-6 w-full lg:w-1/2">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="bike"
            className="w-full aspect-video object-cover object-center rounded-md"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
