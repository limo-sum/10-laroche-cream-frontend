import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BodyCare.scss";

class BodyCare extends Component {
  render() {
    return (
      <div className="BodyCare">
        <div className="hideMenu">
          <div className="menuKategorie">
            <div>
              <ul className="menuList">
                <li>
                  <Link href="/">
                    <div className="menuTop">피부 고민별</div>
                  </Link>
                </li>
                <li>
                  <Link href="/">전체</Link>
                </li>
                <li>
                  <Link href="/">손상 피부</Link>
                </li>
                <li>
                  <Link href="/">건조한 피부</Link>
                </li>
                <li>
                  <Link href="/">두피 모발 강화</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="menuList">
                <li>
                  <Link href="/">
                    <div className="menuTop">제품 라인별</div>
                  </Link>
                </li>
                <li>
                  <Link href="/">전체</Link>
                </li>
                <li>
                  <Link href="/">리피카</Link>
                </li>
                <li>
                  <Link href="/">시카플라스트</Link>
                </li>
                <li>
                  <Link href="/">키리움</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="menuList">
                <li>
                  <Link href="/">
                    <div className="menuTop">사용 단계별</div>
                  </Link>
                </li>
                <li>
                  <Link href="/">전체</Link>
                </li>
                <li>
                  <Link href="/">클렌징</Link>
                </li>
                <li>
                  <Link href="/">로션/크림</Link>
                </li>
                <li>
                  <Link href="/">세럼/바디케어</Link>
                </li>
                <li>
                  <Link href="/">헤어케어</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menuBox">
            <div className="menuBoxTop">
              전체 제품보기
              <div className="arrow"></div>
            </div>
            <div className="menuBoxBottom">
              피부 민감도 자가진단
              <div className="arrow"></div>
            </div>
          </div>

          <div className="menuImgBox">
            <img
              alt="menuImg"
              className="menuImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2020/04/20200429_1739030_209_210x210.png"
            />
            <div className="menuImgText">
              <div className="menuImgTextTop">시카플라스트</div>
              <div className="menuImgTextMiddle">젤B5기획세트</div>
              <div className="menuImgTextBottom">22,000원</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyCare;
