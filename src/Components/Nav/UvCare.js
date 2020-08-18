import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UvCare.scss";

class UvCare extends Component {
  render() {
    return (
      <div className="UvCare">
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
                  <Link href="/">건조한 피부</Link>
                </li>
                <li>
                  <Link href="/">UV 차단</Link>
                </li>
                <li>
                  <Link href="/">톤업/메이크업</Link>
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
                  <Link href="/">똘러리앙</Link>
                </li>
                <li>
                  <Link href="/">안뗄리오스</Link>
                </li>
                <li>
                  <Link href="/">유비데아</Link>
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
                  <Link href="/">UV차단</Link>
                </li>
                <li>
                  <Link href="/">로션/크림</Link>
                </li>
                <li>
                  <Link href="/">BB/파운데이션</Link>
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
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200720_1010034_243_210x210.png"
            />
            <div className="menuImgText">
              <div className="menuImgTextTop">유비데아</div>
              <div className="menuImgTextMiddle">XL 틴티드 크림[톤보정]</div>
              <div className="menuImgTextBottom">32,000원</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UvCare;
