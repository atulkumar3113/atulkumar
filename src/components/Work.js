import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/work.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1224, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 598, min: 0 },
    items: 1,
  },
};

const Work = () => {
  return (
    <div className="recentWork">
      <h6>Recent Works</h6>
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={100}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="img-box">
          <img
            src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Work;
