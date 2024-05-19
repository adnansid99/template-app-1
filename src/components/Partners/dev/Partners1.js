import { useNode } from "@craftjs/core";
import FlexDirectionTool from "../../craft-tools/FlexDirectionTool";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";

export default function Partners1({ props, style }) {
  const {
    headingText = "Trusted by the worlds best companies.",
    logos = [
      "https://source.unsplash.com/random/200x200/?brand logo",
      "https://source.unsplash.com/random/205x205/?brand logos",
      "https://source.unsplash.com/random/210x210/?brand logos",
      "https://source.unsplash.com/random/215x215/?brand logos",
      "https://source.unsplash.com/random/220x220/?brand logos",
      "https://source.unsplash.com/random/225x225/?brand logos",
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
        className="py-20 flex flex-col items-center justify-center gap-8 px-8 mx-auto container"
      >
        <h2 className="text-black dark:text-white text-2xl md:text-4xl font-semibold text-center">
          {headingText}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(120px,1fr))] items-center w-full gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logos"
              className="w-full rounded-md aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const PartnersSettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <FlexDirectionTool />
      <PaddingTool />
      <MarginTool />
      {/* <BackgroundColorTool /> */}
    </div>
  );
};

export const PartnersData = () => {
  const {
    headingText,
    actions: { setProp },
  } = useNode((node) => ({
    headingText: node.data.props.props.headingText,
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
    </div>
  );
};

export const PartnersDefaultProps = {
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

Partners1.craft = {
  props: PartnersDefaultProps,
  related: {
    settings: PartnersSettings,
    data: PartnersData,
  },
};
