import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./DetailSlider.scss";

class DetailSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 3,
      arrows: true,
    };
    return (
      <div className="DetailSlider">
        <p>함께 구매된 제품</p>
        <Slider {...settings}>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1641030_694_400x400.png"
            />
            <div className="sliderPay">
              에빠끌라클래리파잉 로션 [병원판매제품]{" "}
            </div>
            <div className="sliderPay">30,000 원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200701_1039015_123_400x400.png"
            />
            <div className="sliderPay">에빠끌라딥 클렌징 포밍 크림 </div>
            <div className="sliderPay">22,000 원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200716_1450038_174_400x400.png"
            />
            <div className="sliderPay">에빠끌라BEST 3-Step 세트</div>
            <div className="sliderPay">69,300 원</div>
            <div className="SliderSale"> 77,000원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200701_0010055_099_400x400.png"
            />{" "}
            <div className="sliderPay">에빠끌라트래블 키트</div>
            <div className="sliderPay">9,500 원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1627001_667_400x400.png"
            />
            <div className="sliderPay">
              에빠끌라H 리밸런싱 하이드레이션 로션
            </div>
            <div className="sliderPay">27,000 원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200701_0010055_099_400x400.png"
            />
            <div className="sliderPay">시카플라스트밤 B5 크림[100ml]</div>
            <div className="sliderPay">32,000 원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/04/20200429_1739030_209_400x400.png"
            />
            <div className="sliderPay">시카플라스트젤 B5 기획 세트</div>
            <div className="sliderPay">22,000 원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200717_1730009_222_400x400.png"
            />
            <div className="sliderPay">에빠끌라DAY & NIGHT 클렌저 키트</div>
            <div className="sliderPay">9,500 원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200716_1631053_202_400x400.png"
            />
            <div className="sliderPay">히알루 B5세럼 + 빛타민세럼 증정</div>
            <div className="sliderPay">52,000 원</div>
          </div>
          <div>
            <img
              alt="productImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/06/20200630_1621047_642_400x400.png"
            />
            <div className="sliderPay">에빠끌라A.I 에센스</div>
            <div className="sliderPay">18,00 원</div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default DetailSlider;
