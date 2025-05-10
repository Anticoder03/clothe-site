/* global anime */
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    anime({
      targets: ".fade-in",
      translateY: [40, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="bg-[#F5F5F5] text-[#1E1E1E]">
      {/* Title & Features */}
      <div className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#CDA274] fade-in">
          Our Story Begins with Style
        </h2>
        <p className="mt-4 text-lg text-[#8D8D8D] fade-in">
          At ClothLux, we believe fashion is more than just what you wear — it's how you express yourself. Inspired by minimal luxe, we craft clothing that elevates your lifestyle with comfort, quality, and elegance.
        </p>

        <div className="flex flex-wrap justify-center mt-12 gap-10 fade-in">
          {[ 
            { icon: "tshirt", title: "Premium Fabrics", text: "Only the best quality material." },
            { icon: "shipping-fast", title: "Fast Delivery", text: "Your orders delivered with care." },
            { icon: "recycle", title: "Sustainable", text: "Eco-conscious practices always." },
            { icon: "users", title: "Community Driven", text: "We grow with our customers." },
          ].map((item, idx) => (
            <div key={idx} className="text-center w-40">
              <i className={`fas fa-${item.icon} text-4xl text-[#CDA274] mb-3`}></i>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-[#8D8D8D] text-sm mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* SVG Illustration */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_960_720.jpg"
            alt="Designer SVG"
            className="w-full max-w-sm mx-auto fade-in"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 fade-in">
          <h3 className="text-3xl font-bold text-[#CDA274] mb-4">Our Journey</h3>
          <p className="text-[#8D8D8D] leading-relaxed">
            ClothLux was born from a passion to blend simplicity with luxury. Starting from a small creative studio, we envisioned clothing that spoke elegance without saying a word. Each design is carefully crafted to reflect timeless style, sustainable values, and a hint of personality. From curated collections to meaningful experiences — we dress dreams in fabric.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-[#CDA274] mb-6 text-center fade-in">
          Our Story
        </h3>

        <div className="relative">
          <div className="border-l-2 border-[#CDA274] pl-10">
            {[
              {
                title: "The Launch",
                image: "https://www.svgrepo.com/show/331336/clothing-store.svg",
                description: "Our first collection was released to critical acclaim. Our minimalist approach to fashion struck a chord with fashion enthusiasts and set the tone for our brand’s identity.",
                year: "2021",
              },
              {
                title: "Sustainability Efforts",
                image: "https://www.svgrepo.com/show/343119/recycle-symbol.svg",
                description: "From the very beginning, we committed ourselves to sustainable practices. Our fabrics, production methods, and packaging are all designed to leave a positive impact on the environment.",
                year: "2022",
              },
              {
                title: "The Collaboration",
                image: "https://www.svgrepo.com/show/331312/collaboration.svg",
                description: "We partnered with several local designers and artists to introduce exclusive limited edition collections that showcased both creativity and craftsmanship.",
                year: "2023",
              },
              {
                title: "Customer-Centric Focus",
                image: "https://www.svgrepo.com/show/331342/user-group.svg",
                description: "Our community of customers is at the heart of everything we do. Through feedback and engagement, we constantly adapt and improve to provide the best possible experience.",
                year: "2024",
              },
            ].map((story, idx) => (
              <div key={idx} className="mb-12 flex items-start">
                {/* Dot at each point */}
                {/* <div className="absolute w-6 h-6 rounded-full bg-[#CDA274] left-[-30px] top-[15px]"></div> */}
                <div className="ml-14">
                  <h4 className="text-xl font-semibold text-[#CDA274]">{story.title}</h4>
                  <p className="text-[#8D8D8D] mt-2">{story.description}</p>
                  <p className="text-sm text-[#8D8D8D] mt-1">Year: {story.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
