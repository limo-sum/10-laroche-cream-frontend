import React, { Component } from "react";
import Nav from "./Nav";
import DetailLeft from "./DetailPage/DetailLeft/DetailLeft";
import DetailRight from "./DetailPage/DetailPageRight/DetailRight";
import DetailTab from "./DetailTab/DetailTab";
import DetailSlider from "./DetailSlider/DetailSlider";
import Footer from "../Components/Footer/Footer";
import { API } from "../config";
import "./DetailPage.scss";
import Categories from "../Pages/ProductList/Categories";
import FloatBar from "./FloatBar/FloatBar";

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const apiId = this.props.match.params.id;
    fetch(`${API}product/detail`, {
      method: "POST",
      body: JSON.stringify({ id: apiId }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
  };

  render() {
    return (
      <>
        <Nav />
        <Categories />
        <div className="DetailPageTop">
          <DetailLeft sliderData={this.state.data} />
          <DetailRight rightData={this.state.data} />
        </div>
        <DetailSlider />
        <DetailTab />
        <FloatBar />
        <Footer />
      </>
    );
  }
}

export default DetailPage;
