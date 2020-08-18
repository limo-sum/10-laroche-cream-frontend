import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MomBaby.scss";

class MomBaby extends Component {
  render() {
    return (
      <div className="MomBaby">
        <div className="hideMenu">
          <div className="menuKategorie">
            <div>
              <ul className="menuList">
                <li>
                  <Link href="/">
                    <div className="menuTop">피부 고민별</div>
                  </Link>
                </li>
                <li className="menu_list_top">
                  <Link href="/">전체</Link>
                </li>
                <li>
                  <Link href="/">민감성 피부</Link>
                </li>
                <li>
                  <Link href="/">지성/트러블 피부</Link>
                </li>
                <li>
                  <Link href="/">손상 피부</Link>
                </li>
                <li>
                  <Link href="/">건조한 피부</Link>
                </li>
                <li>
                  <Link href="/">UV 차단</Link>
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
                <li className="menu_list_top">
                  <Link href="/">전체</Link>
                </li>
                <li>
                  <Link href="/">시카플라스트</Link>
                </li>
                <li>
                  <Link href="/">똘러리앙</Link>
                </li>
                <li>
                  <Link href="/">리피카</Link>
                </li>
                <li>
                  <Link href="/">안뗼리오스</Link>
                </li>
                <li>
                  <Link href="/">오 떼르말</Link>
                </li>
                <li>
                  <Link href="/">세로징크</Link>
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
                <li className="menu_list_top">
                  <Link href="/">전체</Link>
                </li>
                <li>
                  <Link href="/">클렌징</Link>
                </li>
                <li>
                  <Link href="/">토너</Link>
                </li>
                <li>
                  <Link href="/">로션/크림</Link>
                </li>
                <li>
                  <Link href="/">UV 차단</Link>
                </li>
                <li>
                  <Link href="/">바디 케어</Link>
                </li>
                <li>
                  <Link href="/">미스트</Link>
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
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200717_1757028_235_210x210.png"
            />
            <div className="menuImgText">
              <div className="menuImgTextTop">오 떼르말</div>
              <div className="menuImgTextMiddle">
                온천수미스트 [300ml] +45ml 샘플 증정
              </div>
              <div className="menuImgTextBottom">22,000원</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MomBaby;
