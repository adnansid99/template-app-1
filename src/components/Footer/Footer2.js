export default function Footer2(props) {
  const {
    title1 = "Explore our collection of premium bikes.",
    title2 = "Visit us at our showroom or contact us for more information",
    inputPlaceholder = "Enter your email",
    buttonText = "Contact Us",
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

  return (
    <footer className="">
      <div className="container py-20 gap-10 container flex flex-col lg:flex-row items-center justify-between px-8 mx-auto">
        <div className="opacity-80 p-2">
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20Black.png"
            alt=""
            className="max-w-52"
          />
          <div className="flex items-center gap-4 mt-2">
            <i class="fa-brands fa-linkedin text-2xl"></i>
            <i class="fa-brands fa-square-facebook text-2xl"></i>
            <i class="fa-brands fa-github text-2xl"></i>
            <i class="fa-brands fa-x-twitter text-2xl"></i>
            <i class="fa-brands fa-youtube text-2xl"></i>
          </div>
        </div>

        <div className="grid sm:text-left text-center grid-cols-[repeat(auto-fit,_minmax(270px,1fr))] max-w-4xl w-full text-sm gap-8">
          <div className="flex flex-col gap-4">
            {legal.map((item, index) => (
              <a key={index} href={item.link} className="text-gray-600 ">
                {item.name}
              </a>
            ))}
          </div>
          <hr className="sm:hidden block" />
          <div className="flex flex-col gap-4">
            {getHelp.map((item, index) => (
              <a key={index} href={item.link} className="text-gray-600 ">
                {item.name}
              </a>
            ))}
          </div>
          <hr className="sm:hidden block" />
          <div className="flex flex-col gap-4">
            {aboutUs.map((item, index) => (
              <a key={index} href={item.link} className="text-gray-600 ">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center py-3 border-t">
        <p className="text-gray-600 text-sm">&copy;{copyRight}</p>
      </div>
    </footer>
  );
}
