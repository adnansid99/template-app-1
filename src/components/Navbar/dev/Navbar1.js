import { useState } from "react";
import { useNode } from "@craftjs/core";
// import BackgroundColorTool from "../../craft-tools/BackgroundColorTool";
import FlexDirectionTool from "../../craft-tools/FlexDirectionTool";
import PaddingTool from "../../craft-tools/PaddingTool";
import MarginTool from "../../craft-tools/MarginTool";
import TextInputTool from "../../craft-tools/TextInputTool";
export default function Navbar1({ props, style }) {
  const {
    navItems = [
      { name: "Home", link: "#" },
      { name: "Bikes", link: "#" },
      { name: "Accessories", link: "#" },
      { name: "About Us", link: "#" },
      { name: "Contact Us", link: "#" },
    ],
    buttonText = "BUY",
  } = props;

  const [showNav, setShowNav] = useState(false);

  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <nav
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{
        padding: `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
          style?.paddingBottom || 0
        }px ${style?.paddingLeft || 0}px`,
        margin: `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
          style?.marginBottom || 0
        }px ${style?.marginLeft || 0}px`,
      }}
      className="relative border-b border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-950"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex items-center justify-between px-8 py-6"
      >
        <div className="flex items-center gap-6 text-sm font-medium">
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Black%20Jutsu.png"
            alt="Jutsu"
            className="inline-block h-8 dark:hidden"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/White%20Jutsu.png"
            alt="Jutsu"
            className="hidden h-8 dark:inline-block"
          />

          <ul className="hidden items-center gap-6 lg:flex">
            {navItems.map((item, index) => (
              <li>
                <a
                  key={index}
                  href={item.link}
                  className="text-nowrap text-gray-700 hover:text-purple-700 dark:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <i
          class="fa-solid fa-bars-staggered block text-xl text-black dark:text-gray-200 lg:hidden"
          onClick={() => setShowNav(true)}
        />

        <button className="hidden text-nowrap rounded-2xl bg-purple-700  px-4 py-1 text-sm font-medium text-white lg:block">
          {buttonText}
        </button>

        <div
          className={`absolute right-0 top-0 w-full border-b bg-white p-7 px-8 transition-all duration-200 dark:border-gray-700 dark:bg-gray-900 ${
            showNav ? "inline-block" : "hidden"
          }`}
        >
          <i
            class="fa-solid fa-xmark mr-6 inline-block w-full cursor-pointer text-right text-2xl text-black dark:text-gray-200"
            onClick={() => setShowNav(false)}
          />{" "}
          <ul className="flex flex-col items-center justify-center gap-6">
            {navItems.map((item, index) => (
              <li>
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-700 hover:text-purple-700 dark:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <button className="text-nowrap rounded-2xl bg-purple-700  px-4 py-1 text-sm font-medium text-white ">
              {buttonText}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export const NavbarSettings = () => {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <FlexDirectionTool />
      <PaddingTool />
      <MarginTool />
    </div>
  );
};

export const NavbarData = () => {
  const {
    navItem1,
    navItem2,
    navItem3,
    navItem4,
    navItem5,
    buttonText,
    actions: { setProp },
  } = useNode((node) => ({
    navItem1: node.data.props.props.navItems[0].name,
    navItem2: node.data.props.props.navItems[1].name,
    navItem3: node.data.props.props.navItems[2].name,
    navItem4: node.data.props.props.navItems[3].name,
    navItem5: node.data.props.props.navItems[4].name,
    buttonText: node.data.props.props.buttonText,
  }));

  return (
    <div className="grid w-full grid-cols-2 gap-2 px-2 py-2">
      <TextInputTool
        label="Text 1"
        value={navItem1}
        onChange={(e) => {
          setProp((props) => {
            props.props.navItems[0].name = e.target.value;
          });
        }}
        placeholder="Enter navitem text here..."
      />

      <TextInputTool
        label="Text 2"
        value={navItem2}
        onChange={(e) => {
          setProp((props) => (props.props.navItems[1].name = e.target.value));
        }}
        placeholder="Enter navitem text here..."
      />

      <TextInputTool
        label="Text 3"
        value={navItem3}
        onChange={(e) => {
          setProp((props) => (props.props.navItems[2].name = e.target.value));
        }}
        placeholder="Enter navitem text here..."
      />

      <TextInputTool
        label="Text 4"
        value={navItem4}
        onChange={(e) => {
          setProp((props) => (props.props.navItems[3].name = e.target.value));
        }}
        placeholder="Enter navitem text here..."
      />
      <TextInputTool
        label="Text 4"
        value={navItem5}
        onChange={(e) => {
          setProp((props) => (props.props.navItems[4].name = e.target.value));
        }}
        placeholder="Enter navitem text here..."
      />
      <TextInputTool
        label="Button Text"
        value={buttonText}
        onChange={(e) => {
          setProp((props) => (props.props.buttonText = e.target.value));
        }}
        placeholder="Enter button text here..."
      />
    </div>
  );
};

export const NavbarDefaultProps = {
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

Navbar1.craft = {
  props: NavbarDefaultProps,
  related: {
    settings: NavbarSettings,
    data: NavbarData,
  },
};
