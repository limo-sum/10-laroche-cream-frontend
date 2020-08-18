import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Review.scss";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
    };
  }

  componentDidMount() {
    this.showReview();
  }

  showReview = () => {
    fetch("/mockdata/data.json")
      .then((res) => res.json())
      .then(({ reviewData }) => {
        this.setState({ reviewData });
      });
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrow: true,
      customPaging: () => (
        <div>
          <span>🀫</span>
        </div>
      ),
    };
    const { reviewData } = this.state;
    return (
      <div className="Review">
        <div className="reviewTitle">
          <p className="mainTitle">REAL REVIEW</p>
          <p className="reviewSubTitle">
            라로슈포제 제품 사용 후 남겨준 리얼 생생 리뷰
          </p>
        </div>

        <div className="reviewList">
          <Slider {...settings}>
            {reviewData.map((item) => {
              return (
                <div className="itemFrame">
                  <div className="itemBox">
                    <img
                      className="itemImg"
                      alt="itemBox"
                      src="https://www.larocheposay.co.kr/upload/review/2018/11/20181102_1425041_063.jpg"
                    />
                    <div className="itemInfo">
                      <p className="itemHash">{item.hash} : 해시태그입니다</p>
                      <p className="itemName">{item.name} : 상품이름입니다</p>
                      <p className="itemDesc">{item.desc} : 상품설명입니다</p>
                      <p className="itemReview">
                        {item.review} : 리뷰부분입니다 여기는 줄바꿈이
                        적용되어야 합니다
                      </p>
                    </div>
                    <div className="reviewUserInfo">
                      <p className="userId">userId</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Review;
