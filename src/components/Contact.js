export default function Contact() {
  return (
    <section className="container py-24">
      <div className="flex flex-col justify-center items-start gap-4 mb-8">
        <p className="text-sm">
          Our showroom is open from Monday to Saturday, 9:00 AM to 6:00 PM.
        </p>
        <h2 className="text-4xl font-semibold">Contact Us</h2>
        <p className="text-sm">
          Feel free to reach out to us for any inquiries or assistance.
        </p>
      </div>
      <div className="flex items-center justify-between gap-16">
        <div className="flex flex-col items-start justify-center gap-4">
          <i class="fa-solid fa-envelope text-3xl"></i>
          <h3 className="text-xl font-medium">Email</h3>
          <p className="text-sm">
            For any service related queries, please contact our service center
            at +204-572-4976
          </p>
          <p className="text-sm">info@email.com</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <i class="fa-solid fa-phone text-2xl"></i>
          <h3 className="text-xl font-medium">Phone</h3>
          <p className="text-sm">
            For any service related queries, please contact our service center
            at +204-572-4976
          </p>
          <p className="text-sm">info@email.com</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <i class="fa-solid fa-location-dot text-2xl"></i>

          <h3 className="text-xl font-medium">Office</h3>
          <p className="text-sm">
            For any service related queries, please contact our service center
            at +204-572-4976
          </p>
          <p className="text-sm">info@email.com</p>
        </div>
      </div>
    </section>
  );
}
