import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: 600,
        backgroundImage: "url(" + require("../../images/banner1.jpg") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bannerContainer" style={{}}>
        <div className="bannerTextContainer" style={{}}>
          <h1 style={{}}>FOODO</h1>
          <h2 style={{}}>一站式POS餐廳電子化管理系統</h2>
          <text
            style={{
              color: " rgba(31, 78, 89, 1)",
              fontSize: "1.5rem",
            }}
          >
            餐飲POS + 手機QRCODE自助點餐 + 餐廳後台管理系統
          </text>
          <br></br>
          <text
            style={{
              color: "rgba(31, 78, 89, 1)",
            }}
          >
            {" "}
            全方位兼顧餐廳現場運營與後台經營分析{" "}
          </text>
          <br></br>
          <text
            style={{
              color: "rgba(31, 78, 89, 1)",
              fontSize: "1.2em",
            }}
          >
            高性價比 高靈活性 強大技術支援
          </text>
          <div
            style={{
              marginTop: 20,
              width: 200,
              height: 50,
            }}
          >
            <button
              className="trial"
              style={{
                width: "100%",
                height: "100%",
                fontSize: 20,
                fontWeight: 600,
                color: "white",
                backgroundColor: "rgba(255, 157, 40,0.8)",
                borderRadius: 10,
                borderWidth: 0,
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://api.whatsapp.com/send?phone=85296898665&text=%E6%88%91%E6%83%B3%E7%99%BB%E8%A8%98%E8%A9%A6%E7%94%A8FOODO%20POS%E7%B3%BB%E7%B5%B1";
              }}
            >
              立即登記試用
            </button>
          </div>
        </div>

        <div
          style={{
            width: "60%",
          }}
        >
          <img
            style={{ width: "50%", marginRight: 10 }}
            src={require("../../images/iPad.png")}
          ></img>
          <img
            style={{ width: "30%" }}
            src={require("../../images/iPhone.png")}
          ></img>
        </div>
      </div>
    </div>
  );
}
