export default function FAQ2(props) {
  const {
    title = "Frequency Asked Questions",
    subTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse.",
    faq = [
      {
        question: "Do you offer test rides for the bikes?",
        answer:
          "Yes, we offer test rides for all our bikes to ensure you find the perfect fit.",
      },
      {
        question: "What is the warranty period for your products?",
        answer:
          "Our products come with a 1-year warranty from the date of purchase.",
      },
      {
        question: "Can I return a product if I'm not satisfied?",
        answer:
          "Yes, we have a 30-day return policy for all our products. Please refer to our return policy for more details.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Shipping usually takes 3-5 business days within the country. International shipping may take longer.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers.",
      },
    ],
  } = props;

  return (
    <section className="container mx-auto px-8 py-20 flex flex-col items-center">
      <div className="grid gap-10 w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex text-center lg:text-left flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-sm md:text-base">{subTitle}</p>
          <div className="hidden aspect-video rounded-3xl w-96 bg-teal-600 lg:grid place-items-center">
            <p className="text-9xl font-bold font-sans text-white">??</p>
          </div>
        </div>
        <div className="flex bg-slate-100 p-14 rounded-3xl flex-col gap-8">
          {faq.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm leading-relaxed md:text-base font-semibold ">
                {item.question}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed font-medium md:font-normal">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
