import { useNode } from "@craftjs/core";
import FlexDirectionTool from "../../craft-tools/FlexDirectionTool";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";

export default function Gallery1({ props, style }) {
  const {
    headerText = "Explore Our Bike Gallery",
    subHeaderText = "Browse through our collection of high-quality bikes available for sale",
    galleryImages = [
      "https://source.unsplash.com/random/315x215/?bike gallery",
      "https://source.unsplash.com/random/320x220/?bike gallery",
      "https://source.unsplash.com/random/325x225/?bike gallery",
      "https://source.unsplash.com/random/330x230/?bike gallery",
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
        className="container mx-auto flex flex-col items-center justify-center gap-6 px-8 py-20 text-center"
      >
        <div>
          <h2 className="mb-4 text-4xl font-semibold text-black dark:text-white">
            {headerText}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            {subHeaderText}
          </p>
        </div>
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] items-center gap-10">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="bike"
              className="w-full rounded-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const GallerySettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <FlexDirectionTool />
      <PaddingTool />
      <MarginTool />
      {/* <BackgroundColorTool /> */}
    </div>
  );
};

export const GalleryData = () => {
  const {
    headerText,
    subHeaderText,
    actions: { setProp },
  } = useNode((node) => ({
    headerText: node.data.props.props.headerText,
    subHeaderText: node.data.props.props.subHeaderText,
  }));

  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <TextInputTool
        label="Heading"
        value={headerText}
        onChange={(e) => {
          setProp((props) => {
            props.props.headerText = e.target.value;
          });
        }}
        placeholder="Enter heading here..."
      />
      <TextInputTool
        label="Sub Heading"
        value={subHeaderText}
        onChange={(e) => {
          setProp((props) => {
            props.props.subHeaderText = e.target.value;
          });
        }}
        placeholder="Enter heading here..."
      />
    </div>
  );
};

export const GalleryDefaultProps = {
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

Gallery1.craft = {
  props: GalleryDefaultProps,
  related: {
    settings: GallerySettings,
    data: GalleryData,
  },
};
