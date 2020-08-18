import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./SideLeft.scss";

class SideLeft extends Component {
  constructor() {
    super();
    this.state = {
      sideBarMenu: [],
      stage: [],
    };
  }

  componentDidMount() {
    this.showSideLeft();
  }

  showSideLeft = () => {
    fetch("/mockdata/sideBar.json")
      .then((res) => res.json())
      .then(({ sideBarMenu, stage }) => {
        this.setState({ sideBarMenu, stage });
      });
  };

  render() {
    const { sideBarMenu, stage } = this.state;

    return (
      <div className="SideLeft">
        <div className="sideCateTitle">FACE</div>
        <Accordion>
          {sideBarMenu.map((category, idx) => {
            return (
              <AccordionItem key={idx}>
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
        <div className="sideCateTitle">
          FILTER
          <button></button>
        </div>
        <ul className="sideCateList">
          <div className="filterTitle">사용 단계 별</div>
          {stage.map((item, idx) => {
            return (
              <label className="filter" key={idx}>
                <input type="checkbox" id="cleansing" />
                {item}
              </label>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideLeft;
