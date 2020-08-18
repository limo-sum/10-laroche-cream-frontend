import React, { Component } from "react";
import "./Notice.scss";

class Notice extends Component {
  render() {
    return (
      <div className="Notice">
        <div className="left">
          <div className="noticeInfoTop">
            <h1>공지사항</h1>
            <p>[제품명/패키지 변경 안내] 안뗄리오스 울트라 논퍼퓸드 크림</p>
          </div>
          <div className="noticeInfoContent">
            <h1>고객케어센터</h1>
            <div className="contentLeft">
              <div className="helpdesk">
                <span>공식 온라인 몰 </span>
                <i>
                  <img
                    src="https://www.larocheposay.co.kr/images/common/ico_tel.png"
                    alt="official"
                  />
                  080-844-0088
                </i>
                <span>제품 문의 </span>
                <i>
                  <img
                    src="https://www.larocheposay.co.kr/images/common/ico_tel.png"
                    alt="phoneImg"
                  />
                  080-344-0088
                </i>
              </div>
            </div>
            <div className="contentRight">
              <span className="openClose">운영시간 </span>
              <strong>
                평일 <i>09:30-17:30</i>
              </strong>
              <p>점심 12:30-13:30 / 주말, 법정공휴일 휴무</p>

              <div className="buttons">
                <button type="button">FAQ</button>
                <button type="button">1:1 상담</button>
                <button type="button">판매병원찾기</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <a href="none">
            <img
              src="https://www.larocheposay.co.kr/upload/site/main/2018/09/20180903_1303026_001.jpg"
              alt="바로가기"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Notice;
