export default function FAQ1({ props }) {
  const {
    title = "Frequency Asked Questions",
    subTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
    title2 = "Still have a question?",
    subTitle2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button = "Contact",
  } = props;

  return (
    <section className="container px-8 mx-auto flex flex-col gap-8 items-center justify-center py-20">
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      <p className="text-sm md:text-base text-center">{subTitle}</p>
      <div className="flex flex-col justify-center items-start gap-6 my-8">
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
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-2xl md:text-4xl font-semibold">{title2}</h2>
        <p className="text-sm md:text-base">{subTitle2}</p>
        <button className="border bg-white border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
          {button}
        </button>
      </div>
    </section>
  );
}
