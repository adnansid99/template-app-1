export default function Contact1({ props }) {
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
    <section className="bg-white dark:bg-gray-950">
      <div className="container px-8 mx-auto py-20">
        <div className="flex flex-col justify-center items-start gap-4 mb-8">
          <p className="text-sm text-gray-700 dark:text-gray-300">{opentime}</p>
          <h2 className="text-3xl text-black dark:text-white md:text-4xl font-semibold">
            {title}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">{reachUs}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))]  items-center gap-12 md:gap-16">
          {moreInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-4"
            >
              <i
                className={`fa-solid text-black dark:text-white text-3xl ${item.icon}`}
              />
              <h3 className="text-xl text-black dark:text-white font-medium">
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
