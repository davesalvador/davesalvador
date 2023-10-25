import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      whileInView="animate"
      ref={ref}
      //   animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My Tech</motion.b> Stack
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend</h2>
          <p>
            Using React.js, we deliver 🚀 high-performance apps. With 🌍 modern
            JavaScript and ✍️ JSX, we craft intuitive interfaces. Data is
            managed seamlessly with 💼 Redux, navigation optimized with 🔀 React
            Router, and features enhanced using 🎣 Hooks. Our styles are dynamic
            via 🎨 CSS-in-JS, and bundling with 📦 Webpack & Babel ensures broad
            compatibility.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>
          <p>
            Using 🖥️ Node.js, we offer swift, non-blocking backend performance.
            With 🛤️ Express.js, we streamline web app creation and, coupled with
            🗃️ MongoDB's flexible NoSQL storage, ensure a secure, scalable, and
            efficient backend for contemporary web solutions.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Version Control</h2>
          <p>
            Utilizing 🌲 Git, we track every code change, ensuring seamless
            merges and rollbacks. Paired with 🌐 GitHub, we enhance
            collaboration with features like pull requests and reviews,
            strengthening our development and transparency.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tools</h2>
          <p>
            Using the MERN stack, our development is powered by tools like 📝
            Visual Studio Code with GitLens and 🎨 React Developer Tools for
            optimal coding and insights. 🌌 Postman fortifies our APIs, 🌉
            MongoDB Compass clarifies our database work, and code standards are
            upheld with 🐞 ESLint and Prettier. With 🐳 Docker's adaptability
            and 🌐 GitHub Desktop's collaboration, we ensure a swift and
            reliable app development process.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
