import React, { Component } from "react";
import "./BrandStoryBanner.scss";

const storyBox = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
class BrandStoryBanner extends Component {
  render() {
    return (
      <div className="BrandStoryBanner">
        <ul className="brandStoryFrame">
          {storyBox.map((item) => {
            return (
              <li className="storyItem">
                <img
                  className="storyImage"
                  alt="storyImage"
                  src={`https://www.larocheposay.co.kr/images/main/campain_banner_v3_${item.id}.jpg`}
                />
                <img
                  className="storyHoverImage"
                  alt="storyImage"
                  src={`https://www.larocheposay.co.kr/images/main/campain_banner_v3_${item.id}_on.png`}
                />
              </li>
            );
          })}
          <li className="storyRef">
            <span>
              *Euromonitor International Limited - 2019년 소비자가 판매액,
              뷰티&퍼스널 케어 2020 edition 기준
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
export default BrandStoryBanner;
