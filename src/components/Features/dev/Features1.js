import { useNode } from "@craftjs/core";
import FlexDirectionTool from "../../craft-tools/FlexDirectionTool";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";

export default function Features1({ props, style }) {
  const {
    isReverse = false,
    labelText = "Ride in Style and Power",
    titleText = "Mountain Bikes",
    description = "Explore the great outdoors with our range of durable and high-performance mountain bikes. Designed to tackle rough terrains and steep inclines, these bikes are perfect for adventure seekers.",
    imageSrc = "https://source.unsplash.com/random/600x400/?sports bikes",
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
        className={`container mx-auto flex flex-col items-center gap-10 px-8 py-20 ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <img
          src={imageSrc}
          alt="features"
          className="aspect-video rounded-lg object-cover object-center lg:w-1/2"
          loading="lazy"
        />
        <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-8 lg:p-14">
          <p className="-mb-4 text-sm text-gray-700 dark:text-gray-300 lg:text-base">
            {labelText}
          </p>
          <h2 className="text-3xl text-black dark:text-white font-bold md:text-4xl">
            {titleText}
          </h2>
          <p className="text-sm dark:text-gray-200 text-gray-600 lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export const FeaturesSettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <FlexDirectionTool />
      <PaddingTool />
      <MarginTool />
      {/* <BackgroundColorTool /> */}
    </div>
  );
};

export const FeaturesData = () => {
  const {
    labelText,
    titleText,
    description,
    actions: { setProp },
  } = useNode((node) => ({
    labelText: node.data.props.props.labelText,
    titleText: node.data.props.props.titleText,
    description: node.data.props.props.description,
  }));

  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <TextInputTool
        label="Label Text"
        value={labelText}
        onChange={(e) => {
          setProp((props) => {
            props.props.labelText = e.target.value;
          });
        }}
        placeholder="Enter label here..."
      />
      <TextInputTool
        label="Title Text"
        value={titleText}
        onChange={(e) => {
          setProp((props) => {
            props.props.titleText = e.target.value;
          });
        }}
        placeholder="Enter title here..."
      />
      <TextInputTool
        label="Sub Heading"
        value={description}
        onChange={(e) => {
          setProp((props) => {
            props.props.description = e.target.value;
          });
        }}
        placeholder="Enter desctiption here..."
      />
    </div>
  );
};

export const FeaturesDefaultProps = {
  style: {
    // flexDirection: "",
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

Features1.craft = {
  props: FeaturesDefaultProps,
  related: {
    settings: FeaturesSettings,
    data: FeaturesData,
  },
};
