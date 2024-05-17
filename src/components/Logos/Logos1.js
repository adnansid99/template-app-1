export default function Logos1({ props }) {
  const {
    title = "Trusted by the worlds best companies social proof to build credibility",
    logos = [
      "https://source.unsplash.com/random/200x200/?brand logo",
      "https://source.unsplash.com/random/205x205/?brand logos",
      "https://source.unsplash.com/random/210x210/?brand logos",
      "https://source.unsplash.com/random/215x215/?brand logos",
      "https://source.unsplash.com/random/220x220/?brand logos",
      "https://source.unsplash.com/random/225x225/?brand logos",
    ],
  } = props;

  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="py-20 flex flex-col items-center justify-center gap-8 px-8 mx-auto container">
        <h2 className="text-black dark:text-white text-2xl md:text-4xl font-semibold text-center">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(120px,1fr))] items-center w-full gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logos"
              className="w-full rounded-md aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
