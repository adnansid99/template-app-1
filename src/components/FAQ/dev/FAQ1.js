import { useNode } from "@craftjs/core";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";
import FlexDirectionTool from "../../craft-tools/FlexDirectionTool";

export default function FAQ1({ props, style }) {
  const {
    title = "Frequently Asked Questions",
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
  } = props;

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-gray-950"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex flex-col items-center justify-center gap-8 px-8 py-20"
      >
        <h2 className="text-3xl font-semibold text-black dark:text-white md:text-4xl">
          {title}
        </h2>
        <p className="text-center text-sm text-gray-700 dark:text-gray-300 md:text-base">
          {subTitle}
        </p>
        <div className="my-8 flex flex-col items-start justify-center gap-6">
          {faq.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold leading-relaxed text-black dark:text-white md:text-base ">
                {item.question}
              </h3>
              <p className="text-xs font-medium leading-relaxed text-black dark:text-gray-300 md:text-sm md:font-normal">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const FAQSettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <FlexDirectionTool />
      <PaddingTool />
      <MarginTool />
    </div>
  );
};
export const FAQData = () => {
  const {
    title,
    subTitle,
    faq,
    actions: { setProp },
  } = useNode((node) => ({
    title: node.data.props.props.title,
    subTitle: node.data.props.props.subTitle,
    faq: node.data.props.props.faq,
  }));

  return (
    <div className="flex w-full flex-col gap-1 px-2 py-2">
      <TextInputTool
        label="Title"
        value={title}
        onChange={(e) => {
          setProp((props) => {
            props.props.title = e.target.value;
          });
        }}
        placeholder="Enter title here..."
      />
      <TextInputTool
        label="Sub Title"
        value={subTitle}
        onChange={(e) => {
          setProp((props) => {
            props.props.subTitle = e.target.value;
          });
        }}
        placeholder="Enter sub title here..."
      />
      <div className="grid grid-cols-2 gap-2">
        {faq.map((item, index) => (
          <>
            <TextInputTool
              label={`Question ${index + 1}`}
              value={item.question}
              onChange={(e) => {
                setProp((props) => {
                  props.props.faq[index].question = e.target.value;
                });
              }}
              placeholder="Enter question here..."
            />
            <TextInputTool
              label={`Answer ${index + 1}`}
              value={item.answer}
              onChange={(e) => {
                setProp((props) => {
                  props.props.faq[index].answer = e.target.value;
                });
              }}
              placeholder="Enter answer here..."
            />
          </>
        ))}
      </div>
    </div>
  );
};

export const FAQDefaultProps = {
  style: {
    flexDirection: "column",
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
  },
};

FAQ1.craft = {
  props: FAQDefaultProps,
  related: {
    settings: FAQSettings,
    data: FAQData,
  },
};
