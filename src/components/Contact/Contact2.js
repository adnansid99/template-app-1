export default function Contact2({ props }) {
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

  return (
    <section className="py-20 bg-teal-600">
      <div className="container mx-auto px-8 text-white">
        <div className="flex items-center justify-between">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl mb-12 lg:text-5xl font-semibold">
              {title}
            </h2>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,1fr))] gap-12">
              {moreInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-center gap-4"
                >
                  <div className="flex items-center text-xl gap-2 ">
                    <i className={`fa-solid ${item.icon}`} />
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm">{item.description}</p>
                  <p className="text-sm">{item.contact}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-96 hidden bg-white aspect-square rounded-3xl xl:grid place-items-center">
            {/* <i class="fa-solid fa-mobile-screen-button "></i> */}
            <i class="fa-solid fa-earth-africa text-[14rem] text-teal-600"></i>
          </div>
          {/* <img
            src="https://source.unsplash.com/random/400x400/?phone,contact"
            alt="contact"
            className="rounded-3xl object-cover object-center w-96 aspect-square"
          /> */}
        </div>
      </div>
    </section>
  );
}
