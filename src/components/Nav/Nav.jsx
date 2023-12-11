import React, { useState, useEffect } from "react";
import classes from "./Nav.module.scss";

import NavLi from "./NavLi";
import Logo from "../Logo/Logo";
import { FaList } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Nav() {
  // Keep monitor resolution changes
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const aboutImgWidth = Math.floor(dimensions.width * 0.3);
  console.log(`aboutImgWidth: ${aboutImgWidth}`);
  const aboutImgMarginLeft = Math.floor(dimensions.width*0.192*0.5);
  console.log(`aboutImageMarginLeft: ${aboutImgMarginLeft}`);
  const headingSize = Math.floor(dimensions.width * 0.035);
  console.log(`headingSize: ${headingSize}`);
  
  // For Nav List items margin-bottom
  const navListMarginBottom = Math.floor(dimensions.width * 0.03);
  //console.log(`navListMarginBottom: ${navListMarginBottom}`);

  // For Nav List items font sizes
  // When window.inner.width >= 860px
  // fontGt scale must be < fontLt scale
  const fontGt = Math.floor(dimensions.width * 0.025);
  //console.log(`fontGt(px): ${fontGt}`);

  // For Nav List item font sizes
  // When window.inner.width < 860px
  // fontLt scale must be > fontGt scale
  const fontLt = Math.floor(dimensions.width * 0.03);
  //console.log(`fontLt(px): ${fontLt}`);

  // For FaList (Menu) symbol
  const FaListWidth = Math.floor(dimensions.width * 0.075);
  

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

  const as = [
    {
      className: `${classes.lk}`,
      value: "Home",
      href: "/",
      id: 1,
    },
    {
      className: `${classes.lk}`,
      value: "About",
      href: "/about",
      id: 2,
    },
    {
      className: `${classes.lk}`,
      value: "Products",
      href: "/products",
      id: 3,
    },

    {
      className: `${classes.contactus} btn btn--white`,
      value: "Contact",
      href: "/contact",
      id: 4,
    },
  ];

  // console.log("width: \n", dimensions.width);

  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle((toggle) => !toggle);
  };

  function NavLt860() {
    return toggle ? <NavLt860List /> : <NavLt860Hide />;
  }

  function NavLt860List() {
    return (
      <div className={classes.navShow} >
        <div className={classes.navShowList} >
          <Logo className={classes.logo} value="Evertex" />
          <ImCross
            onClick={onToggle}
            size={30}
            className={classes.imcross}

          />
        </div>
        <ul className={`${classes.lswrap}`}>
          {as.map((each, i) => {
            return (
              <NavLi
                fontGt={fontGt}
                fontLt={fontLt}
                dimensions={dimensions}
                id={as[i].id}
                className={as[i].className}
                value={as[i].value}
                href={as[i].href}
                key={as[i].id}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  function NavLt860Hide() {
    return (
      <div
        className={classes.navHideList}
      >
        <div style={{marginLeft: "4%"}}>
          <Logo className={classes.logo} value="Evertex" />
          {/* <h3 className ={classes.logo__h3}>EVERTEX</h3> */}
            {/* Logo Text when Resolution < 860 px */}
        </div>

        <FaList
          onClick={onToggle}
          size={FaListWidth}
          className={classes.falist}
        />
      </div>
    );
  }

  function NavGt860() {
    return (
      <div 
        className={classes.navgt}
        style={{
          // Nav List Margin bottom
          marginBottom: navListMarginBottom,
        }}
      >
        <div
          style={{
            width: "40%",
            paddingLeft: "0%",
            alignItems: "center",
            height: "100%",
            marginTop: 5,
            
          }}
        >
          <Logo className={classes.logo} value="Evertex" />
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "flex-end",
            flexFlow: "row wrap",
            paddingRight: "4%",
            alignItems: "center",
          }}
        >
          <ul className={`${classes.ls}`}>
            {as.map((each, i) => {
              return (
                <NavLi
                  fontGt={fontGt}
                  fontLt={fontLt}
                  dimensions={dimensions}
                  id={as[i].id}
                  className={`${as[i].className}`}
                  value={as[i].value}
                  href={as[i].href}
                  key={as[i].id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  return dimensions.width > 970 ? <NavGt860 /> : <NavLt860 />;
}

