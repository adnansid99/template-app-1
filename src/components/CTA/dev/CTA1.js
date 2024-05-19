import { useNode } from "@craftjs/core";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";
import FlexDirectionTool from "../../craft-tools/FlexDirectionTool";

export default function CTA1({ props, style }) {
  const {
    headerText = "Find Your Perfect Ride",
    subHeaderText = "Explore our wide range of bikes and find the one that suits your style and needs.",
    primaryButtonText = "Browse Bikes",
    secondaryButtonText = "Contact Us",
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
        className="container mx-auto flex flex-col items-center justify-center gap-6 px-8 py-20 text-center"
      >
        <h2 className="text-3xl font-semibold text-black dark:text-white md:text-4xl">
          {headerText}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-200 md:text-base">
          {subHeaderText}
        </p>
        <div className="flex items-center justify-end gap-4">
          <button className="rounded-2xl border border-purple-700 bg-purple-700 px-4 py-1 text-sm font-medium text-white">
            {primaryButtonText}
          </button>
          <button className="rounded-2xl border border-purple-700 bg-transparent px-4 py-1 text-sm font-medium text-purple-700">
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export const CTASettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <FlexDirectionTool />
      <PaddingTool />
      <MarginTool />
    </div>
  );
};

export const CTAData = () => {
  const {
    headerText,
    subHeaderText,
    primaryButtonText,
    secondaryButtonText,
    actions: { setProp },
  } = useNode((node) => ({
    headerText: node.data.props.props.headerText,
    subHeaderText: node.data.props.props.subHeaderText,
    primaryButtonText: node.data.props.props.primaryButtonText,
    secondaryButtonText: node.data.props.props.secondaryButtonText,
  }));

  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <TextInputTool
        label="Header"
        value={headerText}
        onChange={(e) => {
          setProp((props) => {
            props.props.headerText = e.target.value;
          });
        }}
        placeholder="Enter header here..."
      />
      <TextInputTool
        label="Sub Header"
        value={subHeaderText}
        onChange={(e) => {
          setProp((props) => {
            props.props.subHeaderText = e.target.value;
          });
        }}
        placeholder="Enter sub header here..."
      />
      <TextInputTool
        label="Primary Button Text"
        value={primaryButtonText}
        onChange={(e) => {
          setProp((props) => {
            props.props.primaryButtonText = e.target.value;
          });
        }}
        placeholder="Enter primary button text here..."
      />
      <TextInputTool
        label="Secondary Button Text"
        value={secondaryButtonText}
        onChange={(e) => {
          setProp((props) => {
            props.props.secondaryButtonText = e.target.value;
          });
        }}
        placeholder="Enter secondary button text here..."
      />
    </div>
  );
};

export const CTADefaultProps = {
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

CTA1.craft = {
  props: CTADefaultProps,
  related: {
    settings: CTASettings,
    data: CTAData,
  },
};
