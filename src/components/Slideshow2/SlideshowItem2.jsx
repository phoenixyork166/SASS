import React, { useState, useEffect } from "react";
import "./Slideshow2.scss";

const SlideshowItem = ( {item, width, dimensions} ) => {
    const imgWidthLt = Math.floor(dimensions.width * 0.8);
    const imgHeightLt = Math.floor(imgWidthLt * 1);
    const imgWidthGt = Math.floor(dimensions.width * 0.9);
    const imgHeightGt = Math.floor(imgWidthGt * 0.37);
    //console.log(`imgWidth: ${imgWidth}`);

    return (
        <div className="slideshowItem frosted" style={{ width: width }}>
            <img 
                className="slideshowItem--img frosted__container" 
                src={item.url} 
                style={{
                    //width: dimensions.width >= 650 ? "" : imgWidth
                    //width: dimensions.width >= 650 ? "" : dimensions.width > 450 ? imgWidth : "27rem"
                    width: dimensions.width < 450 ? imgWidthLt : imgWidthGt,
                    height: dimensions.width < 850? imgHeightLt : imgHeightGt,
                }}
            />
            {/* <div className="slideshowItem--text frosted__container">
                <p className="slideshowItem--text-p">
                    {item.des}
                </p>
            </div> */}
            {/* <div className="slideshowItem--text">{item.description}</div> */}
        </div>
    )
}

export default SlideshowItem;