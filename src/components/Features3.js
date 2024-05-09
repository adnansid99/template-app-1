export default function Features3() {
  return (
    <section className="container py-24 grid grid-cols-2 items-center justify-between">
      <img
        src="https://source.unsplash.com/random/500x300/?black bike"
        alt="features"
        className="rounded-lg object-cover object-center"
      />
      <div className="max-w-[500px] flex flex-col gap-8">
        <p className="text-base">
          Ride in style with our sleek and modern designs
        </p>
        <h2 className="text-4xl font-semibold">Sleek Design</h2>
        <p className="text-base">
          Our bikes are designed to not only perform well but also turn heads
          with their sleek and stylish appearance
        </p>
      </div>
    </section>
  );
}
