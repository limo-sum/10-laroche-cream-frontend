import React, { Component } from "react";
import ItemBox from "../../Components/Main/ItemBox";
import { API } from "../../config";
import "./ItemList.scss";

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itemTable: [],
    };
  }

  componentDidMount() {
    this.showItemList();
  }

  showItemList = () => {
    fetch(`${API}product/allitem`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          itemTable: res.data,
        });
      });
  };

  render() {
    const { itemTable } = this.state;
    return (
      <div className="ItemList">
        <div className="itemListTitle">
          <h1>전체</h1>
          <div className="sortingArea">
            <div className="totalCount">{itemTable.length}개</div>
            <ul className="sortingCriteria">
              <li>판매량 순</li>
              <li>최근 등록 순</li>
              <li>리뷰 많은 순</li>
              <li>낮은 가격 순</li>
              <li>높은 가격 순</li>
            </ul>
          </div>
        </div>
        <ul className="itemTable">
          {itemTable.map((item, idx) => {
            const product = item.product;
            const hash = product.hash_tag.split(",");
            return (
              <ItemBox
                key={idx}
                item={item}
                width={"narrow"}
                hash={hash}
                price={product.price}
                discountPrice={product.sale_price}
                productLine={product.product_line}
                showLikes={true}
                isBest={item.best}
                isNew={item.new}
                isGift={item.gift}
                isSale={item.sale}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default ItemList;
