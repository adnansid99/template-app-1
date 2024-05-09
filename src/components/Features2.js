export default function Features2() {
  return (
    <section className="container py-24 grid grid-cols-2 items-center justify-between">
      <div className="max-w-[500px] flex flex-col gap-8">
        <p className="text-base">Conquer any terrain</p>
        <h2 className="text-4xl font-semibold">Mountain Bikes</h2>
        <p className="text-base">
          Explore the great outdoors with our range of durable and
          high-performance mountain bikes. Designed to tackle rough terrains and
          steep inclines, these bikes are perfect for adventure seekers.
        </p>
      </div>
      <img
        src="https://source.unsplash.com/random/500x300/?cool bikes"
        alt="features"
        className="rounded-lg object-cover object-center"
      />
    </section>
  );
}
