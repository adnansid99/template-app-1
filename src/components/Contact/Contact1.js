export default function Contact1(props) {
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
    <section className="container py-24">
      <div className="flex flex-col justify-center items-start gap-4 mb-8">
        <p className="text-sm">{opentime}</p>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-sm">{reachUs}</p>
      </div>
      <div className="grid grid-cols-3 items-center gap-16">
        {moreInfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-4"
          >
            <i className={`fa-solid text-3xl ${item.icon}`} />
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
            <p className="text-sm">{item.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
