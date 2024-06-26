export default function Footer2({ props }) {
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

  return (
    <footer className="bg-white dark:bg-slate-950">
      <div className="container py-20 gap-10 flex flex-col lg:flex-row items-center justify-between px-8 mx-auto">
        <div className="opacity-80 p-2">
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20Black.png"
            alt=""
            className="max-w-52 inline-block dark:hidden"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20White.png"
            alt=""
            className="max-w-52 hidden dark:inline-block"
          />
          <div className="flex text-black dark:text-white items-center gap-4 mt-2">
            <i class="fa-brands fa-linkedin text-2xl"></i>
            <i class="fa-brands fa-square-facebook text-2xl"></i>
            <i class="fa-brands fa-github text-2xl"></i>
            <i class="fa-brands fa-x-twitter text-2xl"></i>
            <i class="fa-brands fa-youtube text-2xl"></i>
          </div>
        </div>

        <div className="grid sm:text-left text-gray-700 dark:text-gray-300 text-center grid-cols-[repeat(auto-fit,_minmax(270px,1fr))] max-w-4xl w-full text-sm gap-8">
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
          <div className="h-px w-full bg-gray-300 dark:bg-gray-800 sm:hidden block" />
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
          <div className="h-px w-full bg-gray-300 dark:bg-gray-800 sm:hidden block" />
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
      </div>
      <div className="text-center py-3 border-t dark:border-slate-900">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          &copy;{copyRight}
        </p>
      </div>
    </footer>
  );
}
