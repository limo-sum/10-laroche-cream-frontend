import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Skin.scss";

class Skin extends Component {
  render() {
    return (
      <div className="Skin">
        <div className="hideMenu">
          <div className="menuKategorie">
            <div>
              <ul className="menuList">
                <li>
                  <Link to="/">
                    <div className="menuTop">피부 고민별</div>
                  </Link>
                </li>
                <li className="menu_list_top">
                  <Link to="/productlist">전체</Link>
                </li>
                <li>
                  <Link to="/">민감성 피부</Link>
                </li>
                <li>
                  <Link to="/">지성/트러블 피부</Link>
                </li>
                <li>
                  <Link to="/">손상 피부</Link>
                </li>
                <li>
                  <Link to="/">건조한 피부</Link>
                </li>
                <li>
                  <Link to="/">UV 차단</Link>
                </li>
                <li>
                  <Link to="/">톤업/메이크업</Link>
                </li>
                <li>
                  <Link to="/">탄력</Link>
                </li>
                <li>
                  <Link to="/">주름</Link>
                </li>
                <li>
                  <Link to="/">브라이트닝</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="menuList">
                <li>
                  <Link to="/">
                    <div className="menuTop">제품 라인별</div>
                  </Link>
                </li>
                <li className="menu_list_top">
                  <Link to="/">전체</Link>
                </li>
                <li>
                  <Link to="/">에빠끌라</Link>
                </li>
                <li>
                  <Link to="/">시카플라스트</Link>
                </li>
                <li>
                  <Link to="/">똘러리랑</Link>
                </li>
                <li>
                  <Link to="/">히알루 B5</Link>
                </li>
                <li>
                  <Link to="/">유비데아</Link>
                </li>
                <li>
                  <Link to="/">퓨어비타민C10</Link>
                </li>
                <li>
                  <Link to="/">안뗼리오스</Link>
                </li>
                <li>
                  <Link to="/">세로징크</Link>
                </li>
                <li>
                  <Link to="/">오 떼르말</Link>
                </li>
                <li>
                  <Link to="/">미셀라 클렌징 워터</Link>
                </li>
                <li>
                  <Link to="/">리더믹</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="menuList">
                <li>
                  <Link to="/">
                    <div className="menuTop">사용 단계별</div>
                  </Link>
                </li>
                <li className="menu_list_top">
                  <Link to="/">전체</Link>
                </li>
                <li>
                  <Link to="/">클렌징</Link>
                </li>
                <li>
                  <Link to="/">토너</Link>
                </li>
                <li>
                  <Link to="/">세럼/에센스</Link>
                </li>
                <li>
                  <Link to="/">로션/크림</Link>
                </li>
                <li>
                  <Link to="/">마스크/팩</Link>
                </li>
                <li>
                  <Link to="/">UV차단</Link>
                </li>
                <li>
                  <Link to="/">BB/파운데이션</Link>
                </li>
                <li>
                  <Link to="/">미스트</Link>
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
              src="https://www.larocheposay.co.kr/upload/product/main/2020/07/20200716_1728008_212_210x210.png"
            />
            <div className="menuImgText">
              <div className="menuImgTextTop">에빠끌라</div>
              <div className="menuImgTextMiddle">듀오[+]에센스+샘플2종증정</div>
              <div className="menuImgTextBottom">25,000원</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skin;
