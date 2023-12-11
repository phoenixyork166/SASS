import React, { useState, useEffect } from "react";
import "./Slideshow.scss";

const SlideshowItem = ( {item, width, dimensions} ) => {
    //console.log(`dimensions.width: ${dimensions.width}`);
    const imgWidthLt = Math.floor(dimensions.width * 0.9);
    //console.log(`imgWidth: ${imgWidth}`);

    return (
        <div className="slideshowItem" style={{ width: width }}>
            <div></div>
            <img 
                className="slideshowItem--img" 
                src={item.url} 
                style={{
                    paddingInline: "5%",
                    width: dimensions.width < 850 ? imgWidthLt : "95%",
                    //width: dimensions.width >= 650 ? "" : imgWidth
                    //width: dimensions.width >= 650 ? "" : dimensions.width > 450 ? imgWidth : "27rem"
                }}
            />
            {/* <div className="slideshowItem--text">{item.description}</div> */}
        </div>
    )
}

export default SlideshowItem;