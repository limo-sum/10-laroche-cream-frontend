import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopSlideBar.scss";

class TopSlideBar extends Component {
  constructor() {
    super();
    this.state = {
      topSlideImg: [],
    };
  }

  componentDidMount() {
    this.showTopSlideBar();
  }

  showTopSlideBar = () => {
    fetch("/mockdata/data.json")
      .then((res) => res.json())
      .then(({ topSlideImg }) => {
        this.setState({ topSlideImg });
      });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrow: true,
      customPaging: () => <div>🀆</div>,
    };
    const { topSlideImg } = this.state;
    return (
      <div className="TopSlideBar">
        <Slider {...settings}>
          {topSlideImg.map((item, idx) => {
            return <li className={item.name} key={idx} />;
          })}
        </Slider>
      </div>
    );
  }
}
export default TopSlideBar;
