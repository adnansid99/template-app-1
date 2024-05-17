export default function Logos2({ props }) {
  const {
    title = "Trusted by the worlds best companies social proof to build credibility",
    logos = [
      "https://source.unsplash.com/random/300x300/?brand logo",
      "https://source.unsplash.com/random/305x305/?brand logo",
      "https://source.unsplash.com/random/310x310/?brand logo",
      "https://source.unsplash.com/random/315x315/?brand logo",
      "https://source.unsplash.com/random/320x320/?brand logo",
      "https://source.unsplash.com/random/325x325/?brand logo",
    ],
  } = props;

  return (
    <section className="bg-gray-100 dark:bg-slate-950">
      <div className="py-20 pb-28 mx-auto px-8 flex flex-col items-center justify-center gap-20 container">
        <h2 className="text-3xl md:text-4xl max-w-3xl dark:text-white text-black font-bold text-center">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-[repeat(auto-fit,_minmax(140px,1fr))] place-items-center xl:px-0 px-8 items-center w-full">
          {logos.map((logo, index) => (
            <div className="bg-slate-300 dark:bg-slate-800 p-4 rounded-lg aspect-square">
              <img
                key={index}
                src={logo}
                alt="logos"
                className="aspect-square rounded-lg object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
