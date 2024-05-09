export default function Footer() {
  return (
    <footer className="py-24 container">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4 justify-center items-start">
          <p className="text-sm">Explore our collection of premium bikes.</p>
          <div className="flex items-center justify-end gap-4">
            <input
              placeholder="Enter your email"
              className="border-[1px] border-gray-400 px-12 rounded-2xl text-sm font-medium py-1 text-center outline-none"
            />

            <button className="border-[1px] border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
              Contact Us
            </button>
          </div>
          <p className="text-sm">
            Visit us at our showroom or contact us for more information
          </p>
        </div>
        <div>
          <img src="/Jutsu Black.png" alt="" className="max-w-44" />
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
        <div className="flex items-center justify-center gap-8 ">
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
          <p>Cookies Policy</p>
        </div>
        <p>&copy;2023 Bike Showroom. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
