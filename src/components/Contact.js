/* global anime */
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Animating the section title
    anime({
      targets: ".contact-title",
      opacity: [0, 1],
      translateY: [-50, 0],
      easing: "easeOutQuad",
      duration: 1500,
    });

    // Animating the description text
    anime({
      targets: ".contact-description",
      opacity: [0, 1],
      translateY: [-30, 0],
      easing: "easeOutQuad",
      delay: 500,
      duration: 1500,
    });

    // Animating the form inputs
    anime({
      targets: ".contact-inputs input, .contact-inputs textarea",
      opacity: [0, 1],
      translateY: [30, 0],
      easing: "easeOutQuad",
      delay: anime.stagger(200, { start: 1000 }),
      duration: 1500,
    });

    // Animating the submit button
    anime({
      targets: ".contact-button",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutQuad",
      delay: 1500,
      duration: 1500,
    });
  }, []);

  return (
    <section className="bg-[#F5F5F5] py-16 px-6 relative overflow-hidden">
      {/* Decorative SVG Top Left */}
      <svg
        className="absolute top-0 left-0 w-32 opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#CDA274"
          d="M43.3,-75.4C55.2,-68.6,64.3,-55,69.4,-41.3C74.5,-27.6,75.7,-13.8,74.3,-0.7C73,12.3,68.9,24.7,62.2,37.6C55.5,50.6,46.2,63.9,34.1,70.8C22.1,77.8,7.2,78.4,-7.4,77.1C-22,75.8,-36.2,72.5,-46.9,63.8C-57.5,55.2,-64.6,41.1,-69.2,26.9C-73.7,12.6,-75.7,-1.7,-71.7,-13.9C-67.6,-26,-57.6,-36,-46,-43.9C-34.4,-51.8,-21.2,-57.6,-6.4,-63.3C8.4,-69,16.8,-74.4,27.5,-77.3C38.2,-80.2,50.3,-80.5,43.3,-75.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="contact-title text-4xl md:text-5xl font-bold text-center text-[#1E1E1E] mb-4">
          Contact Us
        </h2>
        <p className="contact-description text-center text-[#8D8D8D] mb-10 text-lg md:text-xl font-medium">
          We'd love to hear from you. Let's start a conversation!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="text-[#1E1E1E] space-y-8">
            <p className="text-[#8D8D8D] text-lg">
              Have a question about our collections, returns, or shipping?
              We’re here to help every step of the way.
            </p>
            <div>
              <h3 className="font-semibold text-[#CDA274] text-lg">Email</h3>
              <p className="text-[#8D8D8D]">support@clothlux.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#CDA274] text-lg">Phone</h3>
              <p className="text-[#8D8D8D]">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#CDA274] text-lg">Address</h3>
              <p className="text-[#8D8D8D]">123 Luxe Street, Fashion City, IN 560001</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-inputs bg-white shadow-xl rounded-lg p-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CDA274] text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CDA274] text-sm"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CDA274] text-sm"
            ></textarea>
            <button
              type="submit"
              className="contact-button bg-[#CDA274] text-[#1E1E1E] font-semibold px-6 py-3 rounded-md hover:bg-[#b98c5f] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Decorative SVG Bottom Right */}
      <svg
        className="absolute bottom-0 right-0 w-48 opacity-10 rotate-180"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#CDA274"
          d="M43.3,-75.4C55.2,-68.6,64.3,-55,69.4,-41.3C74.5,-27.6,75.7,-13.8,74.3,-0.7C73,12.3,68.9,24.7,62.2,37.6C55.5,50.6,46.2,63.9,34.1,70.8C22.1,77.8,7.2,78.4,-7.4,77.1C-22,75.8,-36.2,72.5,-46.9,63.8C-57.5,55.2,-64.6,41.1,-69.2,26.9C-73.7,12.6,-75.7,-1.7,-71.7,-13.9C-67.6,-26,-57.6,-36,-46,-43.9C-34.4,-51.8,-21.2,-57.6,-6.4,-63.3C8.4,-69,16.8,-74.4,27.5,-77.3C38.2,-80.2,50.3,-80.5,43.3,-75.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </section>
  );
};

export default Contact;
