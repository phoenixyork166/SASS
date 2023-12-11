import React, { useState, useEffect } from "react";
import "./benefit.css";

export default function Benefit() {
  const benefits = [
    {
      imgsrc: "../images/manage.png",
      caption: "強大後台管理系統全面提升管理效能",
    },
    {
      src: "../images/manage.png",
      caption: "強大後台管理系統全面提升管理效能",
    },
    {
      src: "../images/manage.png",
      caption: "強大後台管理系統全面提升管理效能",
    },
    {
      src: "../images/manage.png",
      caption: "強大後台管理系統全面提升管理效能",
    },
  ];

  function benefitList() {
    return benefits.map((item) => {
      //console.log(item.src);
      return (
        <div style={{ width: 200, height: 200 }} className="benefitItem">
          <div style={{ width: 200, height: 200 }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={require(item.imgsrc)}
            ></img>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div
        className="benefitContainer"
        style={{
          marginTop: 40,
          width: "80%",
          marginLeft: "10%",
          display: "flex",
          justifyContent: "space-between",
          borderWidth: 1,
          boxShadow: "0px 3px 9px 3px rgba(238, 234, 229, 1)",
          borderRadius: 20,
          overflow: "hidden",
          marginBottom: 20,
          flexWrap: "wrap",
          paddingTop: 20,
        }}
      >
        <div
          style={{
            width: 200,
            height: "20%",
          }}
          className="benefitItem"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: 120, height: 120 }}
              src={require("../images/manage.png")}
            ></img>
            <h3 style={{ textAlign: "center" }}>管理效能up</h3>
          </div>
        </div>
        <div
          style={{
            width: 200,
            height: "20%",
            borderWidth: 1,
          }}
          className="benefitItem"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: 120, height: 120 }}
              src={require("../images/service.png")}
            ></img>
            <h3 style={{ textAlign: "center" }}>服務質素up</h3>
          </div>
        </div>
        <div
          style={{
            width: 200,
            height: "20%",
          }}
          className="benefitItem"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: 120, height: 120 }}
              src={require("../images/customer.png")}
            ></img>
            <h3 style={{ textAlign: "center" }}>顧客滿意度up</h3>
          </div>
        </div>
        <div
          style={{
            width: 200,
            height: "20%",
            borderWidth: 1,
          }}
          className="benefitItem"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: 120, height: 120 }}
              src={require("../images/cost.png")}
            ></img>
            <h3 style={{ textAlign: "center" }}>營運成本down</h3>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "10%",
          width: "80%",
          marginTop: 50,
          height: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <text
          style={{
            fontSize: "1.5em",
            fontWeight: 600,
            color: " rgba(126, 181, 185, 1)",
          }}
        >
          從派籌開檯到售後管理，FOOD0全方位為您的餐廳營運提供支援
        </text>
      </div>
    </div>
  );
}
