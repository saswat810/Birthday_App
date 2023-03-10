// import logo from './logo.svg';
import "./homeScreen.css";
import Gift from "../images/gift.png";
import AmusementPark from "../images/amusement-park.png";
import Balloons from "../images/balloons.png";
import { Link } from "react-router-dom";
// import {Helmet} from "react-helmet";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function HomeScreen() {
  useEffect(() => {
    let firstSlideContainer = document.getElementsByClassName("slide--content")[0];

    let secondSlideContainer = document.getElementsByClassName("slide--content--one")[0];

    let secondCanvas = document.getElementsByClassName("second--canvas")[0];

    secondSlideContainer.setAttribute("style", "display:none");
    secondCanvas.setAttribute("style", "display:none");

    let thirdCanvas = document.getElementsByClassName("third--canvas")[0];

    thirdCanvas.setAttribute("style", "display:none");

    let fourthCanvas = document.getElementsByClassName("fourth--canvas")[0];

    fourthCanvas.setAttribute("style", "display:none");

    setTimeout(function () {
      firstSlideContainer.setAttribute("style", "display:none");
      secondSlideContainer.setAttribute("style", "display:block");
    }, 2500);

    setTimeout(function () {
      document.getElementsByClassName("first--slide")[0].setAttribute("style", "display:none;");
      secondCanvas.setAttribute("style", "display:block");
    }, 6500);

    setTimeout(function () {
      secondCanvas.setAttribute("style", "display:none");
      thirdCanvas.setAttribute("style", "display:block");
    }, 9800);

    setTimeout(function () {
      thirdCanvas.setAttribute("style", "display:none");
      fourthCanvas.setAttribute("style", "display:block");
    }, 17000);
  }, []);


  return (
    <>
     <Header />
    <>

      {/* welcome to react App */}
      <div className="first--slide">
        <div className="slide--content">
          <h1>Hello</h1>
          <h2>Sahithi</h2>
          <span className="top"></span>
          <span className="right"></span>
          <span className="bottom"></span>
          <span className="left"></span>
        </div>

        <div className="slide--content--one">
          <h1 className="first">Today</h1>
          <h2 className="first">is</h2>
          <h2 className="second">your</h2>
          <h1 className="second">special day</h1>
        </div>
      </div>

      <div className="second--canvas">
        <div className="content">
          <h2>Let's</h2>
          <h2>Enjoy</h2>
          <h2>and</h2>
          <h2>Celebrate</h2>
          <h2>it</h2>
          <h2>together</h2>
        </div>
        <div className="canvas--remove"></div>
      </div>
      {/* <Link to={`/wishes`}> */}
        <div className="third--canvas">
          <div className="star--bg">
            <img src={AmusementPark} alt="" id="b1" />
            <img src={AmusementPark} alt="" id="b2" />
          </div>
          <div className="center--line">
            <img src={Balloons} id="bl--right" alt="" />
            <img src={Balloons} id="bl--left" alt="" />
            <h2>
              <span>h</span>
              <span>a</span>
              <span>p</span>
              <span>p</span>
              <span>y</span>
              <br />
              <span>b</span>
              <span>i</span>
              <span>r</span>
              <span>t</span>
              <span>h</span>
              <span>d</span>
              <span>a</span>
              <span>y</span>
            </h2>
          </div>

          <img src={Gift} alt="" id="gf1" />
          <img src={Gift} alt="" id="gf2" />
          <img src={Gift} alt="" id="gf3" />
        </div>
      {/* </Link> */}

      <div className="fourth--canvas">
      <div className="centering" > 
    <Link to={`/wishes`}>
    <div className="cupcake" rel="tooltip" title="Click on me to see your birthday wishes" />
    <div style={{textDecoration: "none", marginLeft: "12%"}}>Click on the cupcake to see your birthday wishes</div>
      </Link>
 </div>
        </div>

    </>

            <Footer/></>
  );
}

export default HomeScreen;
