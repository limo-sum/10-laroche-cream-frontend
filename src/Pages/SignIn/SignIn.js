import React, { Component } from "react";
import MemberSignIn from "./MemberSignIn";
import NonMemberSignIn from "./NonMemberSignIn";
import { API } from "../../config";
import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      activeID: 0,
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  tabHandler = (id) => {
    this.setState({ activeID: id });
  };

  handleLoginBtn = () => {
    const { account, password } = this.state;
    fetch(`${API}user/signin`, {
      method: "POST",
      body: JSON.stringify({
        account,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("Authorization", res.access_token);
          alert("로그인 성공");
          this.props.history.push("/");
        } else {
          alert("로그인 실패, 회원가입 먼저하세요");
          this.props.history.push("signup");
        }
      });
  };

  render() {
    return (
      <div className="SignIn">
        <header>
          <img
            className="logo"
            src="https://www.larocheposay.co.kr/images/common/logo.png?1"
            alt="logo_image"
          />
        </header>
        <main>
          <p>
            회원님만 드리는 <em>풍성한 혜택</em> 놓치지 마세요!
          </p>
          <div>
            <div className="membersSignIn">
              <ul className="tab">
                <li
                  className={
                    this.state.activeID === 0
                      ? "selectedTabs"
                      : "unselectedTabs"
                  }
                  onClick={() => this.tabHandler(0)}
                >
                  <span className="memberTab">회원로그인</span>
                </li>
                <li
                  className={
                    this.state.activeID === 1
                      ? "selectedTabs"
                      : "unselectedTabs"
                  }
                  onClick={() => this.tabHandler(1)}
                >
                  <span className="nonmemberTab">비회원로그인(주문조회)</span>
                </li>
              </ul>
              <div>
                {this.state.activeID === 0 ? (
                  <MemberSignIn
                    handleInput={this.handleInput}
                    handleLoginBtn={this.handleLoginBtn}
                  />
                ) : (
                  <NonMemberSignIn />
                )}
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div>
            <span>이용약관</span>
            <span className="privacy">개인정보처리방침</span>
          </div>
          <div className="copyright">
            COPYRIGHT © 2018 LA ROCHE-POSAY ALL RIGHTS RESERVED
          </div>
        </footer>
      </div>
    );
  }
}
export default SignIn;
