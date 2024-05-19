import { useNode } from "@craftjs/core";
import FlexDirectionTool from "../../craft-tools/FlexDirectionTool";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";

export default function HeroSection1({ props, style }) {
  const {
    headingText = "Welcome to our Bike Showroom",
    subheadingText = "Explore our wide range of bikes for every type of rider",
    primaryButtonText = "Contact Us",
    secondaryButtonText = "View Collection",
    backgroundImageUrl = "https://source.unsplash.com/random/500x500/?bike road",
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
        className="container mx-auto flex py-20 px-8 gap-16 justify-center lg:justify-between items-center flex-row"
      >
        <div className="flex flex-col gap-8 max-w-3xl justify-center text-center lg:text-left lg:items-start items-center">
          <h1 className="text-3xl text-black dark:text-white font-bold lg:text-5xl xl:text-6xl">
            {headingText}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 lg:text-lg">
            {subheadingText}
          </p>
          <div className="flex items-center gap-4">
            <button className="text-nowrap rounded-2xl border-purple-700 bg-purple-700 px-6 py-2 text-sm font-medium text-white">
              {primaryButtonText}
            </button>
            <button className="text-nowrap rounded-2xl border border-purple-700 bg-transparent px-6 py-2 text-sm font-medium text-purple-700">
              {secondaryButtonText}
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block max-w-sm xl:max-w-md rounded-lg  aspect-square mr-4">
          <div className="absolute rounded-lg -left-4 -bottom-4 z-0 w-40 h-40 bg-purple-700" />
          <img
            src={backgroundImageUrl}
            alt="hero"
            className="w-full min-w-28 aspect-square relative h-full z-10 rounded-lg object-cover object-center"
            loading="lazy"
          />
          <div className="absolute rounded-lg -right-4 -top-4 z-0 w-40 h-40 bg-purple-700" />
        </div>
      </div>
    </section>
  );
}

export const HeroSectionSettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <FlexDirectionTool />
      <PaddingTool />
      <MarginTool />
      {/* <BackgroundColorTool /> */}
    </div>
  );
};

export const HeroSectionData = () => {
  const {
    headingText,
    subheadingText,
    primaryButtonText,
    secondaryButtonText,
    actions: { setProp },
  } = useNode((node) => ({
    headingText: node.data.props.props.headingText,
    subheadingText: node.data.props.props.subheadingText,
    primaryButtonText: node.data.props.props.primaryButtonText,
    secondaryButtonText: node.data.props.props.secondaryButtonText,
  }));

  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <TextInputTool
        label="Heading"
        value={headingText}
        onChange={(e) => {
          setProp((props) => {
            props.props.headingText = e.target.value;
          });
        }}
        placeholder="Enter heading here..."
      />

      <TextInputTool
        label="Subheading"
        value={subheadingText}
        onChange={(e) => {
          setProp((props) => (props.props.subheadingText = e.target.value));
        }}
        placeholder="Enter subheading here..."
      />

      <TextInputTool
        label="Primary Button Text"
        value={primaryButtonText}
        onChange={(e) => {
          setProp((props) => (props.props.primaryButtonText = e.target.value));
        }}
        placeholder="Enter primary button text here..."
      />

      <TextInputTool
        label="Secondary Button Text"
        value={secondaryButtonText}
        onChange={(e) => {
          setProp(
            (props) => (props.props.secondaryButtonText = e.target.value)
          );
        }}
        placeholder="Enter secondary button text here..."
      />
    </div>
  );
};

export const HeroSectionDefaultProps = {
  style: {
    flexDirection: "row",
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

HeroSection1.craft = {
  props: HeroSectionDefaultProps,
  related: {
    settings: HeroSectionSettings,
    data: HeroSectionData,
  },
};
