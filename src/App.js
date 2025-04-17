// import React from "react";
import Logo from "./media/1744306838920.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import Animation from './animation';
import MobileSpecialities from './mobile';

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



  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Swasthhyam Logo" className="h-12 w-12 object-contain" />
          <h1 className={`${mobileMenuOpen ? 'text-2xl' : 'text-xl'} font-bold text-emerald-700`}>Swasthhyam Ayurveda</h1>
        </div>
        {/* Desktop Nav */}
        <nav className="space-x-4 hidden md:flex items-center">
          <a href="#services" className="text-gray-600 hover:text-emerald-700">Services</a>
          <a href="#doctors" className="text-gray-600 hover:text-emerald-700">Doctors</a>
          <a href="#about" className="text-gray-600 hover:text-emerald-700">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-700">Contact</a>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl" onClick={() => setShowAppointmentForm(true)}>Book Appointment</button>
        </nav>

        {/* Mobile Toggle Button */}
        {/* Hamburger icon */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars className="text-2xl" />
        </button>


        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
            <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6 transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
              onClick={(e) => e.stopPropagation()} // prevent backdrop click from closing immediately
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <FaTimes className="text-xl text-gray-600" />
                </button>
              </div>
              <nav className="space-y-4">
                <a href="#home" className="block text-gray-800"onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#about" className="block text-gray-800"onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#services" className="block text-gray-800"onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#contact" className="block text-gray-800"onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl" onClick={() => setShowAppointmentForm(true)}>Book Appointment</button>
              </nav>
            </div>
          </div>
        )}


      </header>

      {/* Hero Section */}
      <div className="min-h-[60vh] md:h-[80vh] flex items-center justify-center text-center px-4 transition-all duration-300 ease-in-out"
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
      <Animation />


      {/* About */}
      <section id="about" className="py-16 px-6 bg-emerald-100">
        <h3 className="text-3xl font-semibold text-center text-emerald-800 mb-10">About Us</h3>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Left Content */}
          {/* Left Content */}
          <div className="text-gray-700 space-y-4">
            <p>We are providing evidence-based treatment in knee and spine. We are specialized in healthcare treatment for:</p>
            <ul className="list-disc list-inside pl-4">
              <li><strong>Knee:</strong> Osteoarthritis, Rheumatoid Arthritis, Ligament injuries, Gout (high uric acid), Meniscus injuries.</li>
              <li><strong>Spine:</strong> Degenerative disc changes, slip disc, sciatica, lumbar spondylitis, cervical spondylitis, lordosis and curvature disorders.</li>
              <li><strong>Weight Management:</strong> Obesity due to PCOD, thyroid or DM.</li>
              <li><strong>Thyroid Regulation:</strong> Holistic treatment for long-standing thyroid issues.</li>
              <li><strong>Diabetes Reversal:</strong> Holistic approach to manage and reverse diabetes.</li>
            </ul>

            <div className="block md:hidden">
              {/* Mobile view with truncation */}
              <MobileSpecialities />
            </div>

            <div className="hidden md:block">
              {/* Full list on desktop view */}
              <p><strong>Our Specialities:</strong></p>
              <ul className="list-disc list-inside pl-2">
                <li>Knowledgeable team of professionals</li>
                <li>Complete client satisfaction</li>
                <li>Affordable pricing</li>
                <li>Qualitative products</li>
                <li>Reliable services</li>
                <li>Live In Touch With Our Customers</li>
                <li>Easy payment mode</li>
                <li>Wide connectivity</li>
                <li>We listen,understand and provide Solution</li>
                <li>A great experience with Happy clients</li>
                <li>Low Price Guarantee with best services</li>
              </ul>
              <p>For more queries, kindly visit our clinic.</p>
            </div>


          </div>

          {/* Right Side - Google Map */}
          <div className="w-full h-64 md:h-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Swasthhyam Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5189578823514!2d74.59669387494326!3d16.845738683961344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1237f52c65db5%3A0xa3535676176ded0a!2sWalchand%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1713171303293!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative mx-4">
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
