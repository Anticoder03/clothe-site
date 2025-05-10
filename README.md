

# ✉️ Contact Page with Anime.js Animations

This is a responsive and elegant **Contact Us** page built with **React**, **Tailwind CSS**, and animated using **Anime.js (via CDN)**. It features animated headings, input forms, and decorative SVG blobs, creating a smooth and modern user experience.

---

## 🚀 Features

* ✅ Responsive layout using **Tailwind CSS**
* ✅ Smooth entrance animations with **Anime.js**
* ✅ Beautiful and professional **form design**
* ✅ Decorative **SVG blob** elements
* ✅ Easily customizable and reusable


---

## 🔧 Technologies Used

* **React**
* **Tailwind CSS**
* **Anime.js (CDN)**

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/contact-animejs-react.git](https://github.com/Anticoder03/clothe-site.git

# Navigate into the project
cd contact-animejs-react

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 🌐 Anime.js CDN

Make sure you've included Anime.js in your `public/index.html` file:

```html
<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
```

---

## 🧠 How It Works

The animation logic is handled using the `useEffect` hook in React. Elements like titles, descriptions, and form fields are animated with different delays and transitions using Anime.js.

```js
anime({
  targets: ".contact-title",
  opacity: [0, 1],
  translateY: [-50, 0],
  easing: "easeOutQuad",
  duration: 1500,
});
```

---

## 🎨 Customization

* 🎯 **Colors** and **fonts** can be adjusted via Tailwind classes.
* 🔄 You can replace the **SVG blobs** with your own or use [Blobmaker](https://www.blobmaker.app/).
* ⚙️ Customize the Anime.js timeline or delays as needed.

---

## 📁 Folder Structure

```bash
src/
├── components/
│   └── Contact.jsx   # Contact page with animation
public/
└── index.html        # Includes Anime.js CDN
```

---

## ✨ Credits

* [Anime.js](https://animejs.com/) – JavaScript animation engine
* [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
* [Blobmaker](https://www.blobmaker.app/) – SVG blob generator

---

## 📬 Let's Connect

Feel free to reach out for improvements, contributions, or collaborations!

* 📧 [ap5381545@gmail.com](mailto:ap3581545@gmail.com)
* 🐙 GitHub: [@Anticoder03](https://github.com/Anticoder03)

---

## 🪄 License

This project is open-source and available under the [MIT License](LICENSE).


