import React, { Component } from "react";

class ItemCard extends Component {
  render() {
    const {
      product_line,
      name,
      sale_price,
      price,
      minusClicked,
      plusClicked,
      value,
      firstImg,
    } = this.props;
    const isDiscount = price !== sale_price;
    return (
      <tbody>
        <tr className="items">
          <td className="firstC">
            <input type="checkbox" />
          </td>
          <td className="secondC">
            <img
              alt="itemImg"
              src={`https://www.larocheposay.co.kr${firstImg.slice(
                1,
                firstImg.length - 1
              )}`}
            />
            <div className="productInfo">
              <p className="productLine">{product_line}</p>
              <p className="productName">{name}</p>
            </div>
          </td>
          <td className="thirdC ">
            <div className="count">
              <button type="button" onClick={minusClicked}>
                -
              </button>
              <input readOnly value={value} />
              <button type="button" onClick={plusClicked}>
                +
              </button>
            </div>
            <button type="button" className="confirmChange">
              변경
            </button>
          </td>
          <td className="firthC price">
            <span>
              {isDiscount
                ? (sale_price * value).toLocaleString()
                : (price * value).toLocaleString()}
              <em>원</em>
            </span>
          </td>
          <td className="fifthC buttons">
            <button type="button" className="cyan">
              구매하기
            </button>
            <button type="button">찜</button>
            <button type="button">삭제</button>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default ItemCard;
