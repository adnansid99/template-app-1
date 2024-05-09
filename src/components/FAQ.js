export default function FAQ() {
  return (
    <section className="container flex flex-col gap-8 items-center justify-center py-24">
      <h2 className="text-4xl font-semibold">FAQ</h2>
      <p className="text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="flex flex-col justify-center items-start gap-6 my-8">
        <div>
          <h3 className="text-base font-medium">
            Do you offer test rides for the bikes?
          </h3>
          <p className="text-sm font-normal">
            Yes, we offer test rides for all our bikes to ensure you find the
            perfect fit.
          </p>
        </div>
        <div>
          <h3 className="text-base font-medium">
            What is the warranty period for your products?
          </h3>
          <p className="text-sm font-normal">
            Our products come with a 1-year warranty from the date of purchase.
          </p>
        </div>
        <div>
          <h3 className="text-base font-medium">
            Can I return a product if I'm not satisfied?
          </h3>
          <p className="text-sm font-normal">
            Yes, we have a 30-day return policy for all our products. Please
            refer to our return policy for more details.
          </p>
        </div>
        <div>
          <h3 className="text-base font-medium">
            How long does shipping take?
          </h3>
          <p className="text-sm font-normal">
            Shipping usually takes 3-5 business days within the country.
            International shipping may take longer.
          </p>
        </div>
        <div>
          <h3 className="text-base font-medium">
            What payment methods do you accept?
          </h3>
          <p className="text-sm font-normal">
            We accept all major credit cards, PayPal, and bank transfers.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-4xl font-semibold">Still have a question?</h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="border-[1px] border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
          Contact
        </button>
      </div>
    </section>
  );
}
