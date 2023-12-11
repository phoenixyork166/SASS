import React from "react";
import "./restaurant.css";

export default function Restaurant() {
  const restaurants = [
    {
      url: "url(" + require("../images/茶餐廳.jpeg") + ")",
      name: "茶餐廳",
    },
    {
      url: "url(" + require("../images/手搖飲品店.jpg") + ")",
      name: "飲品店",
    },
    {
      url: "url(" + require("../images/cafe.jpg") + ")",
      name: "咖啡室",
    },
    {
      url: "url(" + require("../images/茶樓.jpg") + ")",
      name: "茶樓",
    },
    {
      url: "url(" + require("../images/粥粉麵店.jpg") + ")",
      name: "粥粉麵店",
    },
    {
      url: "url(" + require("../images/fastfood.jpg") + ")",
      name: "快餐店",
    },
  ];
  function restaurantList() {
    return restaurants.map((restaurant) => {
      //console.log(item.src);
      return (
        <div
          className="restauranrContainer"
          style={{
            width: "30%",
            height: "40%",
            paddingInline: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="restaurantImgs"
            style={{
              width: "100%",
              height: 135,
              backgroundImage: restaurant.url,
              backgroundSize: "cover",
              alignItems: "center",
              borderRadius: 20,
            }}
          ></div>
          <text style={{ fontSize: "1.3em", textAlign: "center" }}>
            {restaurant.name}
          </text>
        </div>
      );
    });
  }

  return (
    <div
      id="restaurant"
      style={{
        width: "80%",

        //backgroundColor: 'yellow',
        marginLeft: "10%",
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <text
        style={{
          fontSize: "1.5em",
          color: "rgba(126, 181, 185, 1)",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        適用餐廳
      </text>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {restaurantList()}
      </div>
    </div>
  );
}
