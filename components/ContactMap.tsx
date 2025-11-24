export default function ContactMap() {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="absolute left-4 top-4 z-10 w-64 rounded-md bg-white p-4 shadow-md">
            <h4 className="text-base font-semibold text-gray-900">DKS Liberia</h4>
            <p className="text-sm text-gray-600">DKS Liberia Incubation Hub</p>
            <p className="text-sm text-gray-600">Monrovia, Liberia</p>
            <a
              href="https://maps.google.com?q=Monrovia"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-primary hover:text-primary/80"
            >
              Directions
            </a>
          </div>
          <div className="aspect-[16/8] w-full">
            <iframe
              title="DKS Liberia location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.803788730998!2d-10.7969!3d6.3133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf09fdf551b6c52b%3A0xa6f7ad8e3b3b9c19!2sMonrovia%2C%20Liberia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
