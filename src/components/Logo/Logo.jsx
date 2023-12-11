import React, {useState, useEffect} from "react";
//import { Animated } from "react-animated-css";
import logo from "../../../src/images/evertex5.png";
import "./Logo.scss";

export default function Logo() {
  // Keep monitor resolution changes
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    // Clear memory leak
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // For window.inner.width > 400
  const logoWidthGt = Math.floor(dimensions.width * 0.1);
  // For window.inner.width < 400
  const logoWidthLt = Math.floor(dimensions.width * 0.525);

  return (
    <div 
      className="logo-container frosted"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem 1rem",
        //paddingTop: "2rem",
      }}
    >
      <img 
          className="logo-container__img frosted__container"
          src={logo} 
          alt="Logo"
          style={{
            cursor: "pointer",
            //marginLeft: "1rem",
            marginRight: "1rem",
            marginLeft: "5%",
            width: dimensions.width < 400 ? logoWidthLt : "auto",
          }}
          onClick={() => 
            window.open(
              // Remember to point this back to 
              // purchased domain name in Prod
              `https://evertex.onrender.com`, 
              '_self'
              // window.open(url, '_self' OR '_blank')
            )
          }
      />
      {/* <Animated animationIn="pulse" isVisible={true}> */}
      {/* </Animated> */}
    </div>
  );
}
