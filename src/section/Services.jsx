const Services = () => {
  return (
    <div id="services" className="bg-gray-900 py-12 w-full pt-[10%]  z-0">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-300">
            Elevate your digital presence with our comprehensive multimedia services.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            From graphic design to web development and SEO optimization, we've got you covered!
          </p>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-800 text-gray-300 rounded-lg border border-gray-700 
                 p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Responsive Badge */}
              <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-100 mt-6 text-center">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-400 mt-4 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Digital Marketing",
    description:
      "Unlock the power of digital marketing with our services. From strategic planning to execution, we specialize in driving online visibility, engagement, and conversions for your business.",
    image: "https://anandhusajan.com/wp-content/uploads/2024/01/arrow.png",
  },
  {
    title: "Email Marketing Campaigns",
    description:
      "Unlock the potential of email marketing with our tailored campaigns. Craft engaging emails that resonate with your audience and drive conversions, building lasting relationships.",
    image: "https://anandhusajan.com/wp-content/uploads/2024/01/arrow.png",
  },
  {
    title: "Web Development",
    description:
      "Empower your online presence with our website development services. We specialize in creating dynamic, user-friendly websites that reflect your brand identity and engage your audience effectively.",
    image: "https://anandhusajan.com/wp-content/uploads/2024/01/arrow.png",
  },
  {
    title: "App Development",
    description:
      "Elevate your business with our app development solutions. Craft innovative, user-centric applications that enhance customer experiences and drive growth.",
    image: "https://anandhusajan.com/wp-content/uploads/2024/01/arrow.png",
  },
];

export default Services;
