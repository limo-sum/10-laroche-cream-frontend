import React, { Component } from "react";
import "./DetailRight.scss";

class DetailRight extends Component {
  constructor() {
    super();
    this.state = { value: 1 };
  }

  buttonClicked = () => {
    if (this.state.value < 5) {
      this.setState({ value: this.state.value + 1 });
    }
    if (this.state.value === 5) {
      alert("5개이상 구매 불가");
    }
  };
  minusClicked = () => {
    if (this.state.value > 1) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    let splitHash;

    if (this.props.rightData) {
      splitHash = this.props.rightData.hash_tag.split(",");
    }
    const { rightData } = this.props;

    return (
      <div className="DetailRight">
        <div className="infoTop">
          <div className="hashTags">
            {rightData &&
              splitHash.map((res) => {
                return <div className="hashTag">{res}</div>;
              })}
          </div>
          <div className="tit">
            {this.props.rightData && (
              <div className="pdline">{rightData.product_line}</div>
            )}
            {this.props.rightData && (
              <div className="rightName">{rightData.name}</div>
            )}
            {this.props.rightData && (
              <div className="rightDesc">{rightData.description}</div>
            )}
          </div>
          <span className="star">
            <div className="rightStar">
              <span className="starNumber">(1130)</span>
            </div>
          </span>
          <div className="tag">
            {this.props.rightData && (
              <div className={rightData.sale ? "isSale" : "displayNone"}>
                세일
              </div>
            )}
            {this.props.rightData && (
              <div className={rightData.gift ? "isGift" : "displayNone"}>
                증정
              </div>
            )}
          </div>
        </div>
        <div className="infoData">
          {this.props.rightData && (
            <div
              className={
                rightData.sale_price ? "originalPriceFrame" : "displayNone"
              }
            >
              <div className="priceTitle">정상가</div>
              <div className="originalPrice">
                {this.props.rightData && (
                  <div>
                    {(rightData.price * this.state.value).toLocaleString()}원
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="salePriceFrame">
            <div className="priceTitle">판매가</div>
            {this.props.rightData && (
              <div className="salePrice">
                {this.props.rightData && (
                  <div>
                    {(rightData.sale_price * this.state.value).toLocaleString()}
                  </div>
                )}
              </div>
            )}
            <span className="won">원</span>
          </div>
          <div className="mileage">
            <div className="mileName">마일리지</div>
            <div className="mileIcon"></div>
            {this.props.rightData && (
              <div>
                {rightData.price * 0.03}M
                <span className="mileGrade"> (회원 등급별 3~10% 적립)</span>
              </div>
            )}
          </div>
          <div className="nonList">
            <div className="originalPriceFrame">무첨가성분</div>
            <img
              alt="nonImg"
              className="nonImg"
              src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1425019_023.png"
            />
            <div className="non">인공색소</div>
            <img
              alt="nonImg"
              className="nonImg"
              src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1425036_024.png"
            />
            <div className="non">파라벤</div>
            <img
              alt="nonImg"
              className="nonImg"
              src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1426033_028.png"
            />

            <div className="non">코메도제닉</div>
          </div>
        </div>
        <div className="amount">
          <div className="amountName">수량</div>
          <div className="count">
            <button
              className="plusMinus"
              type="button"
              onClick={this.minusClicked}
            >
              -
            </button>
            <input
              className="value"
              type="text"
              value={this.state.value}
              readOnly
            />
            <button
              className="plusMinus"
              type="button"
              onClick={this.buttonClicked}
            >
              +
            </button>
          </div>
        </div>
        <div className="total">
          <div>총 구매금액</div>
          <div className="pricetotal">
            {this.props.rightData && (
              <div>
                {(rightData.sale_price * this.state.value).toLocaleString()} 원
              </div>
            )}
          </div>
        </div>
        <div className="detailInfoBtn">
          <div className="heartBtn">
            <div className="heart"></div>
          </div>
          <div className="cart">
            <span>장바구니</span>
          </div>
          <div className="buy">
            <span>구매하기</span>
          </div>
        </div>
        <img
          alt="nonImg"
          className="RightBanner"
          src="https://www.larocheposay.co.kr/upload/event/2020/07/20200720_1432001_272.jpg"
        ></img>
      </div>
    );
  }
}

export default DetailRight;
