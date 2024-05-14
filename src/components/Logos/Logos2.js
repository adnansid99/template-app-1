export default function Logos2(props) {
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
    <section className="py-20 flex flex-col items-center justify-center gap-12 container">
      <h2 className="text-4xl font-semibold text-center max-w-3xl leading-relaxed">
        {title}
      </h2>
      <div className="grid grid-cols-3 items-center gap-20">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logos"
            className="w-40  rounded-md aspect-square"
          />
        ))}
      </div>
    </section>
  );
}
