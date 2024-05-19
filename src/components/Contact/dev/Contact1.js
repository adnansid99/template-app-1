import { useNode } from "@craftjs/core";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";

export default function Contact1({ props, style }) {
  const {
    opentime = "Our showroom is open from Monday to Saturday, 9:00 AM to 6:00 PM.",
    title = "Contact Us",
    reachUs = "Feel free to reach out to us for any inquiries or assistance.",
    moreInfo = [
      {
        icon: "fa-envelope",
        title: "Email",
        description:
          "For any service related queries, please contact our email.",
        contact: "info@email.com",
      },
      {
        icon: "fa-phone",
        title: "Phone",
        description: "For any service related queries, please contact us.",
        contact: "+204-572-4976",
      },
      {
        icon: "fa-location-dot",
        title: "Office",
        description:
          "For any service related queries, please come to our office.",
        contact: "Mohammadpur, Dhaka, Bangladesh",
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
      <div className="container mx-auto px-8 py-20">
        <div className="mb-8 flex flex-col items-start justify-center gap-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">{opentime}</p>
          <h2 className="text-3xl font-semibold text-black dark:text-white md:text-4xl">
            {title}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">{reachUs}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] items-center gap-12 md:gap-16">
          {moreInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-4"
            >
              <i
                className={`fa-solid text-3xl text-black dark:text-white ${item.icon}`}
              />
              <h3 className="text-xl font-medium text-black dark:text-white">
                {item.title}
              </h3>
              <p className=" text-sm text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.contact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const ContactSettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <PaddingTool />
      <MarginTool />
    </div>
  );
};

export const ContactData = () => {
  const {
    opentime,
    title,
    reachUs,
    moreInfo,
    actions: { setProp },
  } = useNode((node) => ({
    opentime: node.data.props.props.opentime,
    title: node.data.props.props.title,
    reachUs: node.data.props.props.reachUs,
    moreInfo: node.data.props.props.moreInfo,
  }));

  return (
    <div className="flex w-full flex-col gap-2 px-2 py-2">
      <TextInputTool
        label="Open Time"
        value={opentime}
        onChange={(e) => {
          setProp((props) => {
            props.props.opentime = e.target.value;
          });
        }}
        placeholder="Enter open time here..."
      />
      <TextInputTool
        label="Header"
        value={title}
        onChange={(e) => {
          setProp((props) => {
            props.props.title = e.target.value;
          });
        }}
        placeholder="Enter header here..."
      />
      <TextInputTool
        label="Reach Us"
        value={reachUs}
        onChange={(e) => {
          setProp((props) => {
            props.props.reachUs = e.target.value;
          });
        }}
        placeholder="Enter reach us text here..."
      />
      {moreInfo.map((item, index) => (
        <div key={index} className="grid grid-cols-2 gap-2">
          <TextInputTool
            label={`Title ${index + 1}`}
            value={item.title}
            onChange={(e) => {
              setProp((props) => {
                props.props.moreInfo[index].title = e.target.value;
              });
            }}
            placeholder="Enter title here..."
          />
          <TextInputTool
            label={`Description ${index + 1}`}
            value={item.description}
            onChange={(e) => {
              setProp((props) => {
                props.props.moreInfo[index].description = e.target.value;
              });
            }}
            placeholder="Enter description here..."
          />
          <TextInputTool
            label={`contact ${index + 1}`}
            value={item.contact}
            onChange={(e) => {
              setProp((props) => {
                props.props.moreInfo[index].contact = e.target.value;
              });
            }}
            placeholder="Enter contact here..."
          />
        </div>
      ))}
    </div>
  );
};

export const ContactDefaultProps = {
  style: {
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

Contact1.craft = {
  props: ContactDefaultProps,
  related: {
    settings: ContactSettings,
    data: ContactData,
  },
};
