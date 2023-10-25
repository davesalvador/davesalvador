import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Modal from "./Modal";

const items = [
  {
    id: 1,
    title: "BulSU Pips",
    img: "/P1.png",
    demoImages: [
      "/demo1.png",
      "/demo2.png",
      "/demo3.png",
      "/demo4.png",
      "/demo5.png",
    ],
    desc: "The BulSU PDO Investment Programming System (BULSUPIPS) is an online platform designed by Bulacan State University's Planning and Development Office. It streamlines investment programming, project proposals, and evaluations for the university's departments. Built on the MERN stack, BULSUPIPS promotes efficient collaboration and decision-making. The frontend is hosted on Firebase, while the backend resides on Heroku.",
    tech: "Tech Stack : MongoDB Express.JS React.JS Node.JS Material UI Firebase Heroku",
    cont: "Contribution: All the Frontend side ",
  },
  {
    id: 2,
    title: "Monitoring System",
    img: "/P2.png",
    demoImages: ["/P2.png", "/P3.png", "/P4.png"],
    desc: "This device is capable of monitoring the electrical parameters of cabled streetlight. More so, the device can detect power cable theft, lamb theft, burn-out lamp, and electricity theft, and inform the streetlight administrators of the said event.",
    tech: "Tech Stack : MongoDB Express.JS React.JS Node.JS SCSS Arduino Python",
    cont: "Contribution: Created the Full Website and the design ",
  },
  {
    id: 3,
    title: "PDO Landing Page",
    img: "/demo6.png",
    demoImages: [
      "/demo6.png",
      "/demo7.png",
      "/demo8.png",
      "/demo9.png",
      "/demo10.png",
      "/demo11.png",
      "/demo12.png",
      "/demo13.png",
      "/demo14.png",
      "/demo15.png",
    ],
    desc: "The PDO landing page serves as the gateway to Bulacan State University's Planning and Development Office, offering streamlined access to investment programming, project proposals, and departmental evaluations. Designed with user-centric navigation, it fosters efficient collaboration and informed decision-making within the university community.",
    tech: "Tech Stack : React.JS ",
    cont: "Contribution: Created the Full Website  ",
  },
  {
    id: 4,
    title: "PMES(ongoing)",
    img: "/demo16.png",
    demoImages: ["/demo16.png", "/demo17.png", "/demo18.png"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    tech: "Tech Stack : MongoDB Express.JS React.JS Node.JS ",
    cont: "Contribution: Created the Full Website and the design ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.tech}</p>
            <p>{item.cont}</p>
            <button onClick={() => setIsModalOpen(true)}>See More</button>
          </motion.div>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            images={item.demoImages}
          />
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
