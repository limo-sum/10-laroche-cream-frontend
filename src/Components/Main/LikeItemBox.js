import React, { Component } from "react";
import { Link } from "react-router-dom";
import { cartAPI, likeAPI } from "../../config";
import Modal from "./Modal";
import "./ItemBox.scss";

class ItemBox extends Component {
  constructor() {
    super();
    this.state = {
      addLike: false,
      addCart: false,
      Authorization: localStorage.getItem("Authorization"),
    };
  }

  handleLikeItem = (id) => {
    fetch(likeAPI, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ product_id: id }),
    }).then((res) => res.json());
  };

  handleCartItem = (id) => {
    fetch(cartAPI, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ product_id: id }),
    }).then((res) => res.json());
  };

  handleClickLikes = (id) => {
    if (!this.state.Authorization) {
      alert("먼저 로그인 해주세요");
      return;
    } else {
      return (
        this.handleLikeItem(id),
        this.setState({
          addLike: !this.state.addLike,
        })
      );
    }
  };

  handleClickCart = (id) => {
    if (!this.state.Authorization) {
      alert("먼저 로그인 해주세요");
      return;
    } else {
      return (
        this.handleCartItem(id),
        this.setState({
          addCart: !this.state.addCart,
        })
      );
    }
  };

  render() {
    const {
      item,
      width,
      showLikes,
      isBest,
      isNew,
      isGift,
      hash,
      price,
      discountPrice,
      productLine,
    } = this.props;
    const { id, name, images } = this.props.item;
    const firstImg = images.slice(1, images.length - 1).split(",")[0];
    const priceNum = Number(price);
    const discountPriceNum = Number(discountPrice);
    const { addLike, addCart } = this.state;
    const { handleClickLikes, handleClickCart } = this;

    return (
      <div className="ItemBox" key={id}>
        <div className={addLike ? "showModal" : "displayNone"}>
          <Modal type="like" />
        </div>
        <div className={addCart ? "showModal" : "displayNone"}>
          <Modal type="cart" />
        </div>
        <li>
          <div
            className={
              width === "narrow" ? "frame narrowFrame" : "frame wideFrame"
            }
          >
            <div
              className={showLikes && "like"}
              onClick={() => handleClickLikes(id)}
            >
              <div className={addLike ? "on" : "off"}></div>
            </div>

            <div className="itemTag">
              <div className={isBest ? "best" : "displayNone"}>BEST</div>
              <div
                className={isNew ? (isBest ? "bestnew" : "new") : "displayNone"}
              >
                NEW
              </div>
            </div>

            <img
              alt="likeItemImg"
              src={`https://www.larocheposay.co.kr${firstImg.slice(
                1,
                firstImg.length - 1
              )}`}
            />

            <p className="itemHash">{hash[0]}</p>
            <p className="itemLine">{productLine}</p>
            <p className="itemName">{name}</p>
            <div className="itemPrice">
              <div className="discount">
                <span
                  className={
                    discountPrice !== price ? "discountRate" : "displayNone"
                  }
                >
                  {Math.round(
                    ((priceNum - discountPriceNum) / priceNum) * 100
                  ) + "%"}
                </span>
                <p
                  className={
                    discountPrice !== price ? "discountPrice" : "sellingPrice"
                  }
                >
                  {priceNum.toLocaleString() + "원"}
                </p>
              </div>
              <p
                className={
                  discountPrice !== price ? "sellingPrice" : "displayNone"
                }
              >
                {discountPriceNum > 0 &&
                  discountPriceNum.toLocaleString() + "원"}
              </p>
            </div>
            <div className="giftSaleTag">
              <p className={isGift ? "gift" : "displayNone"}>증정</p>
              <p className={discountPrice !== price ? "sale" : "displayNone"}>
                세일
              </p>
            </div>
            <div className="over">
              <Link
                to={`detailpage/${item.id}`}
                className="hoverBtn detailView"
              ></Link>
              <div
                className="hoverBtn addCart"
                onClick={() => handleClickCart(id)}
              ></div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default ItemBox;
