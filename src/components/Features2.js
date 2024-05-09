export default function Features2() {
  return (
    <section className="max-w-[1250px] mx-auto py-24 px-4 flex flex-row-reverse items-center justify-around">
      <img
        src="https://source.unsplash.com/random/600x440/?mountain bikes"
        alt="features"
        className="aspect-video max-w-[500px] rounded-lg"
      />
      <div className="max-w-[500px] flex flex-col gap-8">
        <p className="text-base">Conquer any terrain</p>
        <h2 className="text-4xl font-semibold">Mountain Bikes</h2>
        <p className="text-base">
          Explore the great outdoors with our range of durable and
          high-performance mountain bikes. Designed to tackle rough terrains and
          steep inclines, these bikes are perfect for adventure seekers.
        </p>
      </div>
    </section>
  );
}
