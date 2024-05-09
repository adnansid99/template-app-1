export default function Contact() {
  return (
    <section className="max-w-[1250px] mx-auto py-24 px-4">
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
          <svg
            class="h-8 w-8 text-slate-900"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <h3 className="text-xl font-medium">Email</h3>
          <p className="text-sm">
            For any service related queries, please contact our service center
            at +204-572-4976
          </p>
          <p className="text-sm">info@email.com</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <svg
            class="h-8 w-8 text-slate-900"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{" "}
            <line x1="15" y1="7" x2="15" y2="7.01" />{" "}
            <line x1="18" y1="7" x2="18" y2="7.01" />{" "}
            <line x1="21" y1="7" x2="21" y2="7.01" />
          </svg>
          <h3 className="text-xl font-medium">Phone</h3>
          <p className="text-sm">
            For any service related queries, please contact our service center
            at +204-572-4976
          </p>
          <p className="text-sm">info@email.com</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <svg
            class="h-8 w-8 text-slate-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

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
