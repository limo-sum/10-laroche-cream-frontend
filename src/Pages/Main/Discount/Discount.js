import React, { Component } from "react";
import { API } from "../../../config";
import Slides from "../../../Components/Main/Slides";
import "./Discount.scss";

class Discount extends Component {
  constructor() {
    super();
    this.state = {
      discountList: [],
    };
  }

  componentDidMount() {
    this.showDiscount();
  }

  showDiscount = () => {
    fetch(`${API}product/allitem`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          discountList: res.data.filter(
            (item) =>
              Number(item.product.price) !== Number(item.product.sale_price)
          ),
        });
      });
  };

  render() {
    return (
      <div className="Discount">
        <h1 className="discountTitle">공식몰만의 할인구성</h1>
        <div className="discountList">
          <Slides
            slideList={this.state.discountList}
            settings={this.state.settings}
            dots={false}
            slidesToShow={4}
            slidesToScroll={4}
          />
        </div>
      </div>
    );
  }
}
export default Discount;
