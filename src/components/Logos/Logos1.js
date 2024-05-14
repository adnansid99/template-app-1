export default function Logos1(props) {
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
    <section className="py-24 flex flex-col items-center justify-center gap-8 container">
      <h2 className="text-4xl font-semibold text-center">{title}</h2>
      <div className="grid grid-cols-6 items-center w-full gap-10">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logos"
            className="w-full rounded-md aspect-square"
          />
        ))}
      </div>
    </section>
  );
}
