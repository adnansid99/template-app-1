export default function FAQ2({ props }) {
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
    <section className="container mx-auto flex flex-col items-center px-8 py-20">
      <div className="grid w-full grid-cols-1 gap-10 xl:grid-cols-2">
        <div className="flex flex-col gap-6 text-center xl:text-left">
          <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
          <p className="text-sm lg:text-base">{subTitle}</p>
          <div className="hidden aspect-video w-full max-w-96 place-items-center rounded-3xl bg-teal-600 xl:grid">
            <p className="font-sans text-7xl font-bold text-white">??</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-100 p-14">
          {faq.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold leading-relaxed lg:text-base ">
                {item.question}
              </h3>
              <p className="text-xs font-medium leading-relaxed lg:text-sm lg:font-normal">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
