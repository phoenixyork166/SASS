import React, { useState, useEffect } from "react";
import "./moduleplan.css";

export default function ModulePlan() {
  return (
    <div>
      <div
        id="moduleplan"
        style={{
          fontSize: "1.5em",
          color: "rgba(126, 181, 185, 1)",
          fontWeight: "600",
          textAlign: "center",
          marginTop: "10vh",
        }}
      >
        服務收費
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginLeft: 10,
            color: "rgba(234, 107, 31, 1)",
          }}
          className="moduleText"
        >
          彈性收費計劃
        </div>
        <div
          style={{
            fontSize: "2rem",

            color: "rgba(255, 157, 40, 1)",
          }}
          className="moduleText"
        >
          因應營運需求靈活組合
        </div>
      </div>

      <div
        className="imgContainer"
        style={{
          width: "80%",
          marginLeft: "10%",
          display: "flex",
          height: "60vh",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            width: "100%",

            backgroundImage: "url(" + require("../images/planpic.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        <div
          style={{
            width: "100%",
            backgroundImage: "url(" + require("../images/modulepic.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </div>
  );
}
