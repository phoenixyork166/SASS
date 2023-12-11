import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classes from "./Slideshow.module.css";

// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000',

//   }

const slideImages = [
  {
    url: "url(" + require("../images/floorplan.png") + ")",
    caption: [
      {
        h2: "1.樓面及客流管理",
        one: [
          { value: "自助派籌系統" },
          { h4: "提供派籌機供顧客可自行領取籌號，減輕高峰期員工工作" },
        ],
        two: [
          { value: "實時更新鋪面檯況" },
          { h4: "提供樓面圖，餐廳內檯況一目了然，方便靈活管理座位" },
          { h4: "有效提升翻檯率" },
        ],
      },
    ],
  },
  {
    url: "url(" + require("../images/ordering.jpg") + ")",
    caption: [
      {
        h2: "2.落單點菜",
        one: [
          { value: "侍應手機落單及客人QRCode手機自助落單" },
          { value: "訂單同步傳輸至後廚展示系統 Kitchen Display System" },
          { h4: "自動化流程加快落單，送餐流程" },
          { h4: "電子化減少錯單、漏單率，提升服務質素" },
          {
            h4: "使用電子餐牌，隨時隨地因應餐廳情況更換，減少餐牌製作及更換成本",
          },
        ],
        footer: [
          { value: "*餐飲POS 點單頁面" },
          { value: "*手機QR-Code 自助落單頁面" },
        ],
      },
    ],
  },
  {
    url: "url(" + require("../images/payment.jpg") + ")",
    caption: [
      {
        h2: "3.埋單結賬",
        one: [
          {
            value: "系統支援多種電子支付工具",
          },
          { value: "餐廳可自訂折扣優惠及自行編輯支付方式" },
          { h4: "配合會員系統讓餐廳服務更貼心、更彈性、幫助吸引客戶" },
        ],
        footer: [{ value: "*結帳頁面" }],
      },
    ],
  },
  {
    url: "url(" + require("../images/report.jpg") + ")",
    caption: [
      {
        h2: "4.運營管理及會員系統",
        one: [
          { value: "餐廳後台經營分析，提供即時銷售報表" },

          { h4: "餐廳營銷情況清晰化" },
          { h4: "協助制訂及調整未來經營方向" },
          { h4: "電子化報告隨時隨地查閱餐廳營運最新情況" },
        ],
        two: [
          { value: "客戶關係管理" },
          { h4: "提供會員管理平台，為會員提供積分折扣禮券等優惠,增加顧客忠誠" },
        ],
        three: [
          { value: "員工管理系統" },
          { h4: "管理員工權限，配備員工公告佈告欄，提升店鋪運營效率" },
        ],
        footer: [{ value: "*營業報告頁面" }, { value: "*會員管理頁面" }],
      },
    ],
  },
];

// <Slideshow />
const Slideshow = () => {
  return (
    <div
      className="slide"
      // style={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   height: '1000vh',
      //   paddingInline: '2% 2%',
      // }}
    >
      <Slide
        slidecount={1}
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
      >
        {/* Structure: 
                  slideImage.map(slideImage)
                    slideImage.caption(header)
                    <img slideImage.url /> */}

        {/* Container:
                    slideImage.caption
                    <img slideImage.url /> */}
        {slideImages.map((slideImage, index) => (
          <div className={classes.container} key={index}>
            {/* Mapping slideImage.caption for Side Text*/}
            {/* Check slideImage.caption is an Array before mapping */}
            <div className={classes.sidetext}>
              {Array.isArray(slideImage.caption) &&
                slideImage.caption.map((header, index) => (
                  <div>
                    <h2 className={`${classes.h2}`}>{header.h2}</h2>
                    {header.one &&
                      header.one.map((sub) => (
                        <div>
                          <h3 className={`${classes.h3}`}>{sub.value}</h3>
                          <h4 className={classes.h4}>{sub.h4}</h4>
                        </div>
                      ))}
                    {header.two &&
                      header.two.map((sub) => (
                        <div>
                          <h3 className={`${classes.h3}`}>{sub.value}</h3>
                          <h4 className={classes.h4}>{sub.h4}</h4>
                        </div>
                      ))}
                    {header.three &&
                      header.three.map((sub) => (
                        <div>
                          <h3 className={`${classes.h3}`}>{sub.value}</h3>
                          <h4 className={classes.h4}>{sub.h4}</h4>
                        </div>
                      ))}
                  </div>
                ))}
            </div>

            {/* Mapping <img slideImage /> */}
            <div
              className={classes.slideimage}
              style={{ backgroundImage: slideImage.url }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
