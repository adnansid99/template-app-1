export default function Footer1(props) {
  const {
    title1 = "Explore our collection of premium bikes.",
    title2 = "Visit us at our showroom or contact us for more information",
    inputPlaceholder = "Enter your email",
    buttonText = "Contact Us",
    legal = [
      { name: "Privacy Policy", link: "#" },
      { name: "Terms and conditions", link: "#" },
      { name: "Cookies Policy", link: "#" },
    ],
    copyRight = "2023 Bike Showroom. All Rights Reserved.",
  } = props;

  return (
    <footer className="py-20 container px-8 mx-auto ">
      <div className="flex items-center flex-col md:flex-row gap-6 md:gap-0 justify-between">
        <div className="flex flex-col gap-4 justify-center items-center text-center md:text-left md:items-start">
          <p className="text-sm">{title1}</p>
          <div className="flex md:flex-row flex-col items-center justify-end gap-4">
            <input
              placeholder={inputPlaceholder}
              className="border border-gray-400 bg-white w-full px-12 rounded-2xl text-sm font-medium py-1 text-center outline-none"
            />

            <button className="border w-full bg-white border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
              {buttonText}
            </button>
          </div>
          <p className="text-sm">{title2}</p>
        </div>
        <div className="opacity-80">
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20Black.png"
            alt=""
            className="max-w-44"
          />
          <div className="flex items-center gap-4 mt-2">
            <i class="fa-brands fa-linkedin text-2xl"></i>
            <i class="fa-brands fa-square-facebook text-2xl"></i>
            <i class="fa-brands fa-github text-2xl"></i>
            <i class="fa-brands fa-x-twitter text-2xl"></i>
            <i class="fa-brands fa-youtube text-2xl"></i>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center text-sm gap-4 mt-10">
        <div className="flex items-center md:flex-row flex-col justify-center gap-8 ">
          {legal.map((item, index) => (
            <a key={index} href={item.link} className="text-gray-500">
              {item.name}
            </a>
          ))}
        </div>
        <p className="text-gray-500">&copy;{copyRight}</p>
      </div>
    </footer>
  );
}
