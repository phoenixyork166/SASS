import React, {useState, useEffect} from "react";
import './Slideshow2.scss';

const SlideshowText = ( {item, width, dimensions} ) => {
    //console.log(`dimensions.width: ${dimensions.width}`);
    const textWidth = Math.floor(dimensions.width * 0.04);
    //console.log(`imgWidth: ${imgWidth}`);

    return (
        <div className="slideshowText frosted" style={{ width: width }}>
            {/* <img 
                className="slideshowItem--img frosted__container" 
                src={item.url} 
                style={{
                    //width: dimensions.width >= 650 ? "" : imgWidth
                    width: dimensions.width >= 650 ? "" : dimensions.width > 450 ? imgWidth : "27rem"
                }}
            /> */}
            <p className="slideshowText--p"
                style={{
                    fontSize: textWidth
                }}
            >
                {item.des}
            </p>
            {/* <div className="slideshowItem--text">{item.description}</div> */}
        </div>
    )
}

export default SlideshowText;