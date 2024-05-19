import { useNode } from "@craftjs/core";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";

export default function Footer1({ props, style }) {
  const {
    legal = [
      { name: "Privacy Policy", link: "#" },
      { name: "Terms and Conditions", link: "#" },
      { name: "Cookies Policy", link: "#" },
      { name: "Disclaimer", link: "#" },
      { name: "Refund Policy", link: "#" },
    ],
    getHelp = [
      { name: "FAQ", link: "#" },
      { name: "Contact Us", link: "#" },
      { name: "Support", link: "#" },
      { name: "Live Chat", link: "#" },
      { name: "Community Forum", link: "#" },
    ],
    aboutUs = [
      { name: "Company Info", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Press", link: "#" },
      { name: "Our Team", link: "#" },
      { name: "Blog", link: "#" },
    ],
    copyRight = "2023 Bike Showroom. All Rights Reserved.",
  } = props;

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <footer
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-slate-950"
    >
      <div className="container py-20 gap-10 flex flex-col items-center justify-center px-8 mx-auto">
        <div className="grid sm:text-left text-gray-700 dark:text-gray-300 text-center grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] place-items-center w-full text-sm gap-8">
          <div className="flex flex-col gap-4">
            {legal.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-700 dark:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {getHelp.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-700 dark:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {aboutUs.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-700 dark:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="opacity-80 flex flex-col items-center justify-center -mb-10">
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20Black.png"
            alt=""
            className="max-w-44 inline-block dark:hidden"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20White.png"
            alt=""
            className="max-w-40 hidden dark:inline-block"
          />
          <div className="flex text-black dark:text-white items-center gap-4 mt-2">
            <i className="fa-brands fa-linkedin text-xl"></i>
            <i className="fa-brands fa-square-facebook text-xl"></i>
            <i className="fa-brands fa-github text-xl"></i>
            <i className="fa-brands fa-x-twitter text-xl"></i>
            <i className="fa-brands fa-youtube text-xl"></i>
          </div>
        </div>
      </div>
      <div className="text-center py-3 border-t dark:border-slate-900">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          &copy;{copyRight}
        </p>
      </div>
    </footer>
  );
}

export const FooterSettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <PaddingTool />
      <MarginTool />
    </div>
  );
};

export const FooterData = () => {
  const {
    legal,
    getHelp,
    aboutUs,
    copyRight,
    actions: { setProp },
  } = useNode((node) => ({
    legal: node.data.props.props.legal,
    getHelp: node.data.props.props.getHelp,
    aboutUs: node.data.props.props.aboutUs,
    copyRight: node.data.props.props.copyRight,
  }));

  return (
    <div className="flex w-full flex-col gap-2 px-2">
      {legal.map((item, index) => (
        <div key={index}>
          <TextInputTool
            label={`Legal Item ${index + 1} Name`}
            value={item.name}
            onChange={(e) => {
              setProp((props) => {
                props.props.legal[index].name = e.target.value;
              });
            }}
            placeholder="Enter legal item name here..."
          />
          <TextInputTool
            label={`Legal Item ${index + 1} Link`}
            value={item.link}
            onChange={(e) => {
              setProp((props) => {
                props.props.legal[index].link = e.target.value;
              });
            }}
            placeholder="Enter legal item link here..."
          />
        </div>
      ))}
      {getHelp.map((item, index) => (
        <div key={index}>
          <TextInputTool
            label={`Get Help Item ${index + 1} Name`}
            value={item.name}
            onChange={(e) => {
              setProp((props) => {
                props.props.getHelp[index].name = e.target.value;
              });
            }}
            placeholder="Enter get help item name here..."
          />
          <TextInputTool
            label={`Get Help Item ${index + 1} Link`}
            value={item.link}
            onChange={(e) => {
              setProp((props) => {
                props.props.getHelp[index].link = e.target.value;
              });
            }}
            placeholder="Enter get help item link here..."
          />
        </div>
      ))}
      {aboutUs.map((item, index) => (
        <div key={index}>
          <TextInputTool
            label={`About Us Item ${index + 1} Name`}
            value={item.name}
            onChange={(e) => {
              setProp((props) => {
                props.props.aboutUs[index].name = e.target.value;
              });
            }}
            placeholder="Enter about us item name here..."
          />
          <TextInputTool
            label={`About Us Item ${index + 1} Link`}
            value={item.link}
            onChange={(e) => {
              setProp((props) => {
                props.props.aboutUs[index].link = e.target.value;
              });
            }}
            placeholder="Enter about us item link here..."
          />
        </div>
      ))}
      <TextInputTool
        label="Copy Right Text"
        value={copyRight}
        onChange={(e) => {
          setProp((props) => {
            props.props.copyRight = e.target.value;
          });
        }}
        placeholder="Enter copy right text here..."
      />
    </div>
  );
};

export const FooterDefaultProps = {
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

Footer1.craft = {
  props: FooterDefaultProps,
  related: {
    settings: FooterSettings,
    data: FooterData,
  },
};
