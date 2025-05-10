import React from "react";

const products = [
  {
    id: 1,
    name: "Luxe Linen Shirt",
    price: "₹2,499",
    image: "https://images-static.nykaa.com/media/catalog/product/2/1/21137deMH3247_1.jpg",
    desc: "Breathable comfort with timeless style.",
  },
  {
    id: 2,
    name: "Minimalist Hoodie",
    price: "₹3,199",
    image: "https://www.jockey.in/cdn/shop/products/AB37_BLACK_0103_S223_JKY_1_34097f66-89cc-413f-be35-4b6f44143dd8.webp",
    desc: "Premium fabric. Subtle design.",
  },
  {
    id: 3,
    name: "Elegant Trench Coat",
    price: "₹6,999",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNZKdGK-0zm5wyAaXxNcqx2htZ2XWZXY07ivKS6xm3EmWy2H1cgdkc9ylwhgvqPJJBeX1HO1Oaf47S-sRzxbIgWOfP_yK7Ho9-J2dcUT3w",
    desc: "Classic silhouette with modern flair.",
  },
  {
    id: 4,
    name: "Muted Gold Kurta",
    price: "₹1,899",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDjt_5fNW0lTVQgQkGxndlkPYlpapRqiuOyQ_n4psVuNxspssTkRo3BJV2VgTd5oZMdKTpy_qQD_d8jZqqMJ51ZK2R99HI52vF43o5ap8",
    desc: "Festive elegance in warm tones.",
  },
  {
    id: 5,
    name: "Charcoal Slim Jeans",
    price: "₹2,799",
    image: "https://pantproject.com/cdn/shop/files/DSC7075_134985bc-2cb2-4ef8-bbcc-2ef408da40c3.jpg",
    desc: "Perfect fit. Modern edge.",
  },
  {
    id: 6,
    name: "Cozy Knit Sweater",
    price: "₹3,499",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/31453930/2024/11/15/02d757de-f10c-4e83-9ff5-cb0e3737b2e31731660121362-Roadster-Men-Sweaters-1831731660120924-1.jpg",
    desc: "Warmth with effortless chic.",
  },
];

const Seller = () => {
  return (
    <section className="bg-[#F5F5F5] py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-2">Our Best Sellers</h2>
        <p className="text-[#8D8D8D] text-sm md:text-base">
          Discover our most loved pieces picked by our fashion-forward customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1E1E1E]">{product.name}</h3>
            <p className="text-[#8D8D8D] text-sm mb-2">{product.desc}</p>
            <span className="text-[#CDA274] font-medium text-lg">{product.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Seller;
