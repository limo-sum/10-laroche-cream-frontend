import React, { Component } from "react";
import "./SignUpOptionalInfo.scss";

class SignUpOptionalInfo extends Component {
  constructor() {
    super();
    this.state = {
      typeTable: [
        { type: "건성" },
        { type: "복합성" },
        { type: "중성" },
        { type: "지성" },
      ],

      troubleTable: [
        { trouble: "민감성피부" },
        { trouble: "손상 피부" },
        { trouble: "지성/트러블 피부" },
        { trouble: "건조한 피부" },
        { trouble: "주름" },
        { trouble: "탄력" },
        { trouble: "브라이트닝" },
        { trouble: "톤업/메이크업" },
        { trouble: "UV차단" },
        { trouble: "두피 모발 강화" },
      ],
      sensitivity: [
        { sens: 1 },
        { sens: 2 },
        { sens: 3 },
        { sens: 4 },
        { sens: 5 },
      ],
      disable: false,
    };
  }

  handleAgree = (e) => {
    if (e.target.checked === true) {
      this.setState({
        disable: false,
      });
    }
  };

  handleDisagree = (e) => {
    if (e.target.checked === true) {
      this.setState({
        disable: true,
      });
    }
  };

  render() {
    const {
      clickedSensitivity,
      inputHandler,
      handleCheckbox,
      skinTrouble,
    } = this.props;
    const { troubleTable, typeTable, sensitivity, disable } = this.state;

    return (
      <section className="SignUpOptionalInfo">
        <h3>선택항목</h3>
        <ul className="customer_info">
          <li>
            <div className="address">
              <input className="address_input" type="text" />
              <a className="postal_code">우편번호</a>
            </div>
            <input className="detail_address" type="text" />
            <input
              className="detail_address"
              type="text"
              placeholder="상세주소"
            />
          </li>
          <li>
            <div className="friend">
              <input
                className="friend_id"
                type="text"
                placeholder="추천인아이디"
              />
              <a className="check_id">아이디확인</a>
            </div>
            <ul className="dot_list">
              <li>
                회원가입 후 첫 구매 구매확정 시, 추천인 아이디와 회원님께 각각
                마일리지 5,000점씩을 적립해 드립니다.
              </li>
              <li>
                회원가입 시 입력한 추천인 아이디는 수정이 불가하오니, 신중히
                입력해 주세요.
              </li>
            </ul>
          </li>
          <li>
            <h4>민감 정보 수집에 대한 동의 (필수)</h4>
            <div className="add_agree">
              <div className="radio_wrap">
                <span className="radiocss">
                  <input
                    className="radio"
                    onClick={this.handleAgree}
                    name="agree"
                    type="radio"
                  />
                  <label>
                    <em>동의</em>
                  </label>
                </span>
                <span className="radiocss">
                  <input
                    className="radio"
                    onClick={this.handleDisagree}
                    name="agree"
                    type="radio"
                  />
                  <label>
                    <em>미동의</em>
                  </label>
                </span>
              </div>
              <p>
                엘오케이(유)는 (이하 "당사")는 다음과 같이 귀하의 민감정보를
                수집 및 이용합니다.
                <br />
                수집항목 : 피부민감도, 피부타입, 피부고민
                <br />
                이용목적 : 개인맞춤 서비스 제공
                <br />
                보유 및 이용 기간 : 회원탈퇴 시 지체없이 파기
                <br />
                귀하는 개인정보보호법에 따라 개인정보 수집/이용 동의를 거부하실
                수 있으며, 거부 시에는 일부 서비스에 제한이 있을 수 있습니다.
              </p>
            </div>
          </li>
          <li>
            <h4>피부타입</h4>
            <div className="radio_wrap_skin_type">
              {typeTable.map((el, idx) => {
                return (
                  <span className="radiocss" key={idx}>
                    <input
                      type="radio"
                      onClick={inputHandler}
                      name="skinType"
                      value={el.type}
                      disabled={disable}
                    />
                    <label>
                      <em>{el.type}</em>
                    </label>
                  </span>
                );
              })}
            </div>
          </li>
          <li>
            <h4>
              피부고민
              <span>(최대 3개 선택)</span>
            </h4>
            <div className="check_box_skin_problem">
              {troubleTable.map((el, idx) => {
                return (
                  <span className="checkcss" key={idx}>
                    <input
                      type="checkbox"
                      onClick={handleCheckbox}
                      name="skinTrouble"
                      value={el.trouble}
                      unchecked={el.trouble in skinTrouble}
                      disabled={disable}
                    />
                    <label>
                      <em>{el.trouble}</em>
                    </label>
                  </span>
                );
              })}
            </div>
          </li>
          <li>
            <h4>
              피부민감도
              <span>(5점 척도)</span>
            </h4>
            <div className="radio_wrap_sensitivity">
              {sensitivity.map((el, idx) => {
                return (
                  <div
                    key={idx}
                    className={
                      el.sens === this.props.sensitivity
                        ? "selectedRadioCss"
                        : "radioCss"
                    }
                    onClick={() => clickedSensitivity(el.sens, disable)}
                  >
                    <input type="radio" />
                    <label>
                      <em onClick={() => clickedSensitivity(el.sens, disable)}>
                        {el.sens}
                      </em>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="sensitivityRange">
              <span className="left">전혀 민감하지 않다</span>
              <span className="right">매우 민감하다</span>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default SignUpOptionalInfo;
