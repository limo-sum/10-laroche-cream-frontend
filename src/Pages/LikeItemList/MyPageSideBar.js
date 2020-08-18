import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./MyPageSideBar.scss";

class MyPageSideBar extends Component {
  constructor() {
    super();
    this.state = {
      myPageSideBarList: [],
    };
  }

  componentDidMount() {
    this.showMyPageSideBar();
  }

  showMyPageSideBar = () => {
    fetch("/mockdata/sideBar.json")
      .then((res) => res.json())
      .then(({ myPageSideBarList }) => {
        this.setState({ myPageSideBarList });
      });
  };

  render() {
    const { myPageSideBarList } = this.state;
    return (
      <div className="MyPageSideBar">
        <div className="myPageSideBarTitle">MY PAGE</div>

        <Accordion>
          {myPageSideBarList.map((category) => {
            return (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{category.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {category.list.map((el, idx) => {
                    return <li key={idx}>- {el}</li>;
                  })}
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default MyPageSideBar;
