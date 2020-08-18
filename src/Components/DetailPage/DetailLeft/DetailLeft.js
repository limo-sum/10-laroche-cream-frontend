import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./DetailLeft.scss";

class DetailLeft extends Component {
  render() {
    let sliderImgs;
    if (this.props.sliderData) {
      sliderImgs = this.props.sliderData.image;
    }

    const settings = {
      customPaging: function (imageUrl) {
        return (
          <div>
            <img
              alt="sliderImg"
              src={`https://www.larocheposay.co.kr/${sliderImgs[imageUrl]}`}
            />
          </div>
        );
      },
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="DetailLeft">
        <Slider {...settings}>
          {this.props.sliderData &&
            this.props.sliderData.image.map((imageUrl) => {
              return (
                <div>
                  <img
                    className="detailSlider"
                    alt="slideImg"
                    src={`https://www.larocheposay.co.kr${imageUrl}`}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}

export default DetailLeft;
