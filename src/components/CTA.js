export default function CTA() {
  return (
    <section className="gap-6 container flex flex-col items-center justify-center py-24">
      <h2 className="text-4xl font-semibold">Find Your Perfect Ride</h2>
      <p>
        Explore our wide range of bikes and find the one that suits your style
        and needs.
      </p>
      <div className="flex items-center justify-end gap-4">
        <button className="border-[1px] border-orange-700 text-white rounded-2xl bg-orange-700 px-4 text-sm font-medium py-1">
          Browse Bikes
        </button>
        <button className="border-[1px] border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
          Contact Us
        </button>
      </div>
    </section>
  );
}
