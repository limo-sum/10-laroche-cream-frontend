import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API } from "../../config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FloatBar.scss";
class FloatBar extends Component {
  constructor() {
    super();
    this.state = {
      floatProducts: [],
      cartProducts: [],
      likedProducts: [],
      userName: "",
      Authorization: localStorage.getItem("Authorization"),
    };
  }
  componentDidMount() {
    this.showFloatBar();
  }
  showFloatBar = () => {
    fetch("/mockdata/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          floatProducts: res.data,
        });
      });
    fetch(`${API}user/userinfo`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ userName: res.name });
      });
    fetch(`${API}user/cartproduct`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ cartProducts: res.cart_list });
      });
    fetch(`${API}user/likeproduct`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ likedProducts: res.like_list });
      });
  };
  goToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    const { goToTop } = this;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: true,
    };
    const {
      floatProducts,
      cartProducts,
      likedProducts,
      Authorization,
    } = this.state;
    return (
      <div className="FloatBar">
        <div className="floatContainer">
          {Authorization ? (
            <div className="floatGreeting">
              <strong>
                <em>{this.state.userName}</em>님
              </strong>
              <p>반갑습니다</p>
            </div>
          ) : (
            <div className="floatGreeting">
              <p>반갑습니다</p>
            </div>
          )}
          <div className="icon">
            <Link to="/cart">
              <div className="floatCart">
                <p className="count">
                  {Authorization ? cartProducts.length : 0}
                </p>
              </div>
            </Link>
          </div>
          <div className="icon">
            <Link to="/likeitemlist">
              <div className="floatLike">
                <p className="count">
                  {Authorization ? likedProducts.length : 0}
                </p>
              </div>
            </Link>
          </div>
          <div className="floatProduct">
            <Slider {...settings}>
              {floatProducts.map((item, idx) => {
                return (
                  <img
                    key={idx}
                    className="itemImg"
                    alt={item.desc}
                    src={item.img}
                  />
                );
              })}
            </Slider>
          </div>
          <div className="goToTop" onClick={goToTop}>
            TOP ↑
          </div>
        </div>
      </div>
    );
  }
}
export default FloatBar;
