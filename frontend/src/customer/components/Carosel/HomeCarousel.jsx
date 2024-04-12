import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Import Router and Link components

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const item = homeCarouselData.map((item) => (
    <Link to={item.path} className="cursor-pointer" key={item.path}>
      <img
        src={item.image}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
    </Link>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
    />
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <HomeCarousel />
      </div>
    </Router>
  );
};

export default App;
