import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container " style={{padding:"80px"}}>
      <div className="row text-center">
        <h1
          className="mt-5 "
          style={{ lineHeight: "1.25", fontSize: "2.55rem", color: "#424242" }}
        >
          The Zerodha Universe
        </h1>
        <p
          className="mt-3 "
          style={{ lineHeight: "1.20", fontSize: "1.10rem", color: "#424242" }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>


      <div className="row text-center">
        <div className="col-4 mt-5 p-3">
          <img
            src="media\Images\zerodhaFundhouse.png"
            alt="fundHouse"
            className="mb-5,p-3"
            style={{ maxWidth: "60%", margin: "0 auto" }}
          />
          <p className=" text-muted mt-3" style={{ fontSize: "0.90rem" }}>
            Our asset management venture<br/>that is creating simple and transparent
            index<br/>funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 mt-5 p-3">
          <img
            src="media\Images\sensibullLogo.svg"
            alt="sensibull"
            className="mb-5,p-3"
            style={{ width: "80%", margin: "0 auto" }}
          />
          <p className=" text-muted mt-4" style={{ fontSize: "0.90rem" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 mt-5 p-3">
          <img
            src="media\Images\tijori.svg"
            alt="tijori"
            className="mb-5,p-3"
            style={{ width: "45%", margin: "0 auto" }}
          />
          <p className=" text-muted mt-2" style={{ fontSize: "0.90rem" }}>
            Investment research platform <br/>that offers detailed insights on
            stocks,<br/> sectors, supply chains, and more.
          </p>
        </div>
      </div>



      <div className="row text-center">

        <div className="col-4 mt-5 p-3">
          <img
            src="media\Images\streakLogo.png"
            alt="streak"
            className="mb-5,p-3"
            style={{ maxWidth: "60%", margin: "0 auto" }}
          />
          <p className=" text-muted mt-3" style={{ fontSize: "0.90rem" }}>
            Systematic trading platform <br/>that allows you to create and backtest<br/>
            strategies without coding.
          </p>
        </div>

        <div className="col-4 mt-5 p-3">
          <img
            src="media\Images\smallcaseLogo.png"
            alt="smallcaseLogo"
            className="mb-5,p-3"
            style={{ maxWidth: "100%", margin: "0 auto" }}
          />
          <p className=" text-muted mt-4" style={{ fontSize: "0.90rem" }}>
            Thematic investing platform <br/>that helps you invest in diversified<br/>
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 mt-5 p-3">
          <img
            src="media\Images\dittoLogo.png"
            alt="ditto"
            className="mb-5,p-3"
            style={{ maxWidth: "50%", margin: "0 auto" }}
          />
          <p className=" text-muted mt-3" style={{ fontSize: "0.90rem" }}>
            Personalized advice on life <br/>and health insurance. No spam<br/> and no
            mis-selling.
          </p>
        </div>

      </div>
      <div className="row mt-3">
      <button className='mt-4 btn btn-primary fs-5 ' style={{width:"18%", margin: "0 auto"}}> <Link to="/signup" style={{color:"white",textDecoration:"none"}}>Signup for free</Link></button>
      </div>
    </div>
  );
}

export default Universe;
