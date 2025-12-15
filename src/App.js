import React, { useState } from "react";
import {
  BrandicoFacebook,
  BrandicoInstagram,
  BrandicoTwitterBird,
  GgMenuRightAlt,
  SystemUiconsSun,
} from "./icons/Icons";
import "./App.css";

const App = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className={nav ? "mobilePopup showPopup" : "mobilePopup"}>
        <div className="nav">
          <a href="/" className="active">
            Home
          </a>
          <a href="/">About</a>
          <a href="/">Gallery</a>
          <a href="/">Contact</a>
          <button>
            <SystemUiconsSun />
          </button>
        </div>
        <div className="socials">
          <a href="/">
            <BrandicoFacebook />
          </a>
          <a href="/">
            <BrandicoInstagram />
          </a>
          <a href="/">
            <BrandicoTwitterBird />
          </a>
        </div>
      </div>
      <div className="app">
        <div className="sidebar">
          <h2 className="title">Astro</h2>
          <div className="socials">
            <a href="/">
              <BrandicoFacebook />
            </a>
            <a href="/">
              <BrandicoInstagram />
            </a>
            <a href="/">
              <BrandicoTwitterBird />
            </a>
          </div>
        </div>
        <div className="main">
          <div className="nav">
            <a href="/" className="active">
              Home
            </a>
            <a href="/">About</a>
            <a href="/">Gallery</a>
            <a href="/">Contact</a>
            <button>
              <SystemUiconsSun />
            </button>
          </div>
          <div className="mobileNav">
            <h2 className="title">Astro</h2>
            <button onClick={() => setNav(!nav)}>
              <GgMenuRightAlt />
            </button>
          </div>
          <div className="hero">
            <h1>Adventure Together</h1>
            <p>
              Explore distant stars and vast galaxies, venturing through cosmic
              paths of light and shadow. Discover new worlds and hidden wonders
              beyond the void, charting unknown skies where every orbit reveals
              secrets of the universe.
            </p>
          </div>
          <button className="slider" onClick={() => Slide()}>
            <img src="https://i.postimg.cc/w38zhKgM/slider.png" alt="slide" />
          </button>
          <div className="footer">
            <img src="https://i.postimg.cc/DyYttJDh/space.png" alt="space" />
            <div className="note">
              <h3>Exploration</h3>
              <p>
                Explore distant stars and planets while charting cosmic paths
              </p>
            </div>
            <div className="note">
              <h3>Footprint</h3>
              <p>
                Explore distant stars and planets while charting cosmic paths
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Slide = () => {
  var slider = document.querySelector(".footer");
  slider.scrollTo({
    top: 0,
    left: slider.scrollWidth,
    behavior: "smooth",
  });
};

export default App;
