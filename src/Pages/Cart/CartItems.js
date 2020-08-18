import React, { Component } from "react";
import ItemCard from "./ItemCard";
import { userAPI, cartAPI } from "../../config";
import "./CartItems.scss";

class CartItems extends Component {
  constructor() {
    super();
    this.state = {
      CartItemTable: [],
      value: 1,
    };
  }

  componentDidMount() {
    this.showCartItems();
  }

  showCartItems = () => {
    fetch(userAPI, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ userName: res.name });
      });

    fetch(cartAPI, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ CartItemTable: res.cart_list });
      });
  };

  minusClicked = () => {
    if (this.state.value > 1) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };

  plusClicked = () => {
    if (this.state.value < 5) {
      this.setState({
        value: this.state.value + 1,
      });
    }
  };

  sumPrice = () => {
    let totalPrice = 0;
    let sellingPrice = 0;
    this.state.CartItemTable.forEach((item) => {
      if (item.sale_price !== item.price) {
        sellingPrice = item.sale_price;
      } else {
        sellingPrice = item.price;
      }
      totalPrice = totalPrice + Number(sellingPrice) * this.state.value;
    });
    return totalPrice;
  };

  discountAmount = () => {
    let totalDiscount = 0;
    let discounted = 0;
    this.state.CartItemTable.forEach((item) => {
      if (item.sale_price !== item.price) {
        discounted = item.price - item.sale_price;
      } else {
        discounted = 0;
      }
      totalDiscount = totalDiscount + Number(discounted) * this.state.value;
    });
    return totalDiscount;
  };

  shippingfee = () => {
    let shippingFee = 0;
    this.sumPrice() - this.discountAmount() < 70000 && this.sumPrice() !== 0
      ? (shippingFee = 2500)
      : (shippingFee = 0);
    return shippingFee;
  };

  render() {
    const { CartItemTable } = this.state;
    return (
      <div className="CartItems">
        <div className="itemListTitle">
          <li className="cartOn">
            <span>01 </span>장바구니
          </li>
          <div className="stageArrow" />
          <li>
            <span>02 </span>주문/결제
          </li>
          <div className="stageArrow" />
          <li>
            <span>03 </span>결제완료
          </li>
        </div>
        <div className="memeberInfo">
          <div className="memberlevel">
            <span className="memberIcon"></span>
            <p>
              {this.state.userName} 님의 회원 등급은
              <span>Dermo-beginner</span> 입니다.
            </p>
          </div>
          <button>등급 혜택</button>
          <div className="mileage">
            <p>
              총 보유 마일리지 <span>400</span>M
            </p>
            <p>
              사용 가능 쿠폰 <span>1</span>장
            </p>
          </div>
        </div>
        <div className="cartTableTitle">
          <h1 className="titleLeft">
            장바구니 제품 <span>{CartItemTable.length}</span>
          </h1>
          <div className="titleRight">
            * 금액대 별 증정품에 한해 결제완료 시 최종 확인 가능합니다.
            <button>선택제품 삭제</button>
          </div>
        </div>
        <div className="cartItemTable">
          <thead>
            <tr className="tableHead">
              <th className="firstC checkAll">
                <input type="checkbox" />
              </th>
              <th className="secondC">제품정보</th>
              <th className="thirdC">수량</th>
              <th className="firthC">판매금액</th>
              <th className="fifthC">선택</th>
            </tr>
          </thead>
          {CartItemTable.map((item, idx) => {
            const { id, product_line, name, sale_price, price, images } = item;
            const priceNum = Number(price);
            const sale_priceNum = Number(sale_price);
            const firstImg = images.slice(1, images.length - 1).split(",")[0];
            return (
              <ItemCard
                item={item}
                id={id}
                name={name}
                price={priceNum}
                sale_price={sale_priceNum}
                product_line={product_line}
                minusClicked={this.minusClicked}
                plusClicked={this.plusClicked}
                value={this.state.value}
                firstImg={firstImg}
              />
            );
          })}
          <div className="total">
            <span>
              <em className="totalItem">총 주문금액</em>
              <strong>
                {this.sumPrice().toLocaleString()}
                <em>원</em>
              </strong>
            </span>
            <span>
              <em className="totalItem">총 할인금액</em>
              <strong className="dicountCount">
                {this.discountAmount().toLocaleString()}
                <em>원</em>
              </strong>
            </span>
            <span>
              <em className="totalItem">총 배송비</em>
              <strong>
                {(this.sumPrice() < 70000 ? 2500 : 0).toLocaleString()}
                <em>원</em>
              </strong>
            </span>
            <span>
              <em className="totalItem">결제예정금액</em>
              <strong className="totalCount">
                {(
                  this.sumPrice() -
                  this.discountAmount() +
                  this.shippingfee()
                ).toLocaleString()}
                <em>원</em>
              </strong>
            </span>
          </div>
          <div class="cartBtn">
            <button className="continue">쇼핑 계속하기</button>
            <button className="orderChosen">선택제품 주문하기</button>
            <button className="orderAll">전체제품 주문하기</button>
          </div>
          <div className="cartNotification">
            <ul className="notifications">
              <li>
                장바구니에 담긴 제품은 담은 날로부터 최대 1개월 간 보관되며,
                결제완료 시 자동 삭제됩니다.
              </li>
              <li>
                제품 판매금액 3만원 이상 구매 시 배송비 무료이며,
                <span>도서/산간 및 제주도 지역도 추가 배송비 없습니다.</span>
              </li>
              <li>마일리지 제품은 구매하신 제품과 함께 묶음배송 됩니다.</li>
              <li>
                장바구니의 결제예정금액은 주문/결제 시 적용하는 할인혜택에 따라
                변동될 수 있습니다.
              </li>
              <li>
                증정품은 한정수량으로 조기소진 시, 사전공지 없이 대체제품으로
                변경 또는 증정되지 않을 수 있습니다.
              </li>
              <li>일시품절된 제품은 자동으로 제외되어 주문/결제됩니다.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItems;
