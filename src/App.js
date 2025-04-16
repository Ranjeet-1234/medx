// import React from "react";
import Logo from "./media/1744306838920.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect, useRef } from "react";
import Animation from './animation';

export default function App() {

  const slides = [
    {
      url: "https://t3.ftcdn.net/jpg/02/45/77/62/360_F_245776292_KjTmy7E9bYhpZxfikW1YLbZrG2EPoRay.jpg",
      quote: "Ayurveda is the science of life and the art of longevity.",
    },
    {
      url: "https://img.freepik.com/premium-photo/ayurveda-india-symbol-background-isolated-white-background_1022134-9164.jpg",
      quote: "Healing begins when you align with nature.",
    },
    {
      url: "https://images.onlymyhealth.com/only-my-health-english/images/2025/01/08/template/image/2-HMPV-1736317919841.jpg",
      quote: "Balance your body, mind, and spirit with Ayurveda.",
    },
  ];

  // const services = [
  //   {
  //     title: "Panchakarma",
  //     description: "Detoxification therapy.",
  //     img: "https://img.freepik.com/free-photo/spa-concept-with-pink-salt-towel_23-2148380113.jpg",
  //   },
  //   {
  //     title: "Herbal Therapy",
  //     description: "Personalized herbal treatment.",
  //     img: "https://img.freepik.com/free-photo/ayurvedic-herbal-ingredients-wooden-bowl_1150-28768.jpg",
  //   },
  //   {
  //     title: "Nadi Pariksha",
  //     description: "Pulse diagnosis.",
  //     img: "https://img.freepik.com/free-photo/nadi-pariksha-concept_1373-513.jpg",
  //   },
  //   {
  //     title: "Abhyanga",
  //     description: "Oil massage therapy.",
  //     img: "https://img.freepik.com/free-photo/woman-having-abhyanga-ayurvedic-oil-massage_23-2148891826.jpg",
  //   },
  //   {
  //     title: "Basti",
  //     description: "Medicated enema treatment.",
  //     img: "https://img.freepik.com/free-photo/basti-ayurvedic-therapy-concept_1150-28975.jpg",
  //   },
  //   {
  //     title: "Shirodhara",
  //     description: "Oil pouring on forehead.",
  //     img: "https://img.freepik.com/free-photo/shirodhara-therapy-ayurveda-treatment_1150-28985.jpg",
  //   },
  //   {
  //     title: "Weight Management",
  //     description: "Herbal weight control.",
  //     img: "https://img.freepik.com/free-photo/fitness-healthy-lifestyle-concept_23-2147776236.jpg",
  //   },
  //   {
  //     title: "Thyroid Regulation",
  //     description: "Natural hormone balance.",
  //     img: "https://img.freepik.com/free-photo/thyroid-treatment-ayurveda-concept_1150-28991.jpg",
  //   },
  //   {
  //     title: "Diabetes Reversal",
  //     description: "Manage naturally.",
  //     img: "https://img.freepik.com/free-photo/ayurvedic-treatment-diabetes-concept_1150-28995.jpg",
  //   },
  //   {
  //     title: "Joint Pain Relief",
  //     description: "Arthritis & joint care.",
  //     img: "https://img.freepik.com/free-photo/joint-pain-ayurvedic-treatment_1150-29001.jpg",
  //   },
  // ];



  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAppointmentForm(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 5 seconds delay

    return () => clearInterval(interval);
  }, []);

  const sliderRef = useRef();

  useEffect(() => {
    const scroll = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);





  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Swasthhyam Logo" className="h-12 w-12 object-contain" />
          <h1 className="text-2xl font-bold text-emerald-700">Swasthhyam Ayurveda</h1>
        </div>
        <nav className="space-x-4">
          <a href="#services" className="text-gray-600 hover:text-emerald-700">Services</a>
          <a href="#doctors" className="text-gray-600 hover:text-emerald-700">Doctors</a>
          <a href="#about" className="text-gray-600 hover:text-emerald-700">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-700">Contact</a>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl" onClick={() => setShowAppointmentForm(true)}>Book Appointment</button>
        </nav>
      </header>

      {/* Hero Section */}
      <div
        className="h-[80vh] flex items-center justify-center text-center transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-xl max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white italic">
            “{slides[currentSlide].quote}”
          </h2>
        </div>
      </div>




      {/* Services */}
      <Animation/>
      {/* <section id="services" className="py-16 px-6 bg-white overflow-hidden">
        <h3 className="text-3xl font-semibold text-center text-emerald-700 mb-10">
          Our Services
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scrollX w-[200%]">
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="w-1/6 px-4 pb-6 box-border"
                style={{ minWidth: '16.66%' }}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-40 w-full object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-emerald-700">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}




      {/* About */}
      <section id="about" className="py-16 px-6 bg-emerald-100">
        <h3 className="text-3xl font-semibold text-center text-emerald-800 mb-10">About Us</h3>
        <div className="max-w-5xl mx-auto text-gray-700 space-y-4">
          <p><strong>Business Name:</strong> Swasthhyam Ayurveda Private Limited</p>
          <p><strong>Category:</strong> Ayurvedic</p>
          <p><strong>Nature of Business:</strong> Knee and Spine Expert</p>

          <p>Welcome to Swasthhyam Ayurveda Private Limited, your trusted destination for holistic healing and pain relief. We specialize in the treatment of Knee and Spine Disorders, providing expert care for a wide range of conditions including Joint Pain, Arthritis, Frozen Shoulder, Spondylosis, Lower Back Pain, and Muscle Aches.</p>

          <p>We are providing evidence-based treatment in knee and spine. We are specialized in healthcare treatment for:</p>
          <ul className="list-disc list-inside pl-4">
            <li><strong>Knee:</strong> Osteoarthritis, Rheumatoid Arthritis, Ligament injuries, Gout (high uric acid), Meniscus injuries.</li>
            <li><strong>Spine:</strong> Degenerative disc changes, slip disc, sciatica, lumbar spondylitis, cervical spondylitis, lordosis and curvature disorders.</li>
            <li><strong>Weight Management:</strong> Obesity due to PCOD, thyroid or DM.</li>
            <li><strong>Thyroid Regulation:</strong> Holistic treatment for long-standing thyroid issues.</li>
            <li><strong>Diabetes Reversal:</strong> Holistic approach to manage and reverse diabetes.</li>
          </ul>

          <p>At Swasthhyam Ayurveda, we understand the impact that pain and discomfort can have on your daily life. That’s why we offer personalized Ayurvedic treatments that focus on both alleviating pain and addressing the root causes of your condition.</p>

          <p>Our team of experienced Ayurvedic practitioners combines ancient wisdom with modern therapies to bring you natural, effective solutions for long-term relief. We aim to restore mobility, reduce inflammation, and improve your quality of life through tailored treatments involving therapeutic oils, herbal remedies, and lifestyle guidance.</p>

          <p><strong>Our Specialities:</strong></p>
          <ul className="list-disc list-inside pl-4">
            <li>Knowledgeable team of professionals</li>
            <li>Complete client satisfaction</li>
            <li>Affordable pricing</li>
            <li>Qualitative products</li>
            <li>Reliable services</li>
            <li>Live In Touch With Our Customers</li>
            <li>Easy payment mode</li>
            <li>Wide connectivity</li>
            <li>We listen, We understand, We provide Solution</li>
            <li>A great experience with Happy clients</li>
            <li>Low Price Guarantee with best services</li>
          </ul>

          <p>For more queries, kindly visit our clinic.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center text-emerald-700 mb-10">Get In Touch</h3>
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-xl" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-xl" />
            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-xl h-32" />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl w-full">Send Message</button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919999999999?text=Hello%20Swasthhyam%2C%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl w-full"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              Connect on WhatsApp
            </a>

          </form>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-700 text-white py-6 text-center">
        <p>&copy; 2025 Swasthhyam Ayurveda. All rights reserved.</p>
      </footer>

      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setShowAppointmentForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Book Appointment</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <textarea
                placeholder="Reason for Appointment"
                className="w-full p-3 border border-gray-300 rounded-xl h-24"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
