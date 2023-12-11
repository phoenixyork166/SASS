// Slideshow2 is dedicated for Products page only
import React, {useState, useEffect} from "react";
import "./Slideshow2.scss";
import items2 from "./items2";
import SlideshowItem2 from "./SlideshowItem2";
import SlideshowText from "./SlideshowText";

const Slideshow2 = () => {
    // Listening to window dimensions changes
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    // Tracking resolution changes
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
    }, []);

    // Monitor resolutions
    //console.log(`dimensions.width * 0.8 * 0.5: ${dimensions.width * 0.8 * 0.5}`)
    // For window.inner.width >= 1200
    const slideshowWidthGt = Math.floor(dimensions.width*0.435);
    const slideshowHeightGt = Math.floor(slideshowWidthGt * 1.65);

    // For window.inner.width < 1200
    const slideshowWidthLt = Math.floor(dimensions.width*0.815);
    const slideshowHeightLt = Math.floor(slideshowWidthLt * 2.2);
    //console.log(`slideshowWidth: ${slideshowWidth}`);
    const btnParentWidthLt = Math.floor(slideshowWidthLt * 0.12);
    const btnParentHeightLt = Math.floor(btnParentWidthLt * 0.5);
    const btnParentWidthGt = Math.floor(slideshowWidthGt * 0.12);
    const btnParentHeightGt = Math.floor(btnParentWidthGt * 0.5);
    const textSize = Math.floor(dimensions.width * 0.03);
    const indicatorWidth = Math.floor(dimensions.width * 0.617);
    console.log(`Slideshow2 textSize: ${textSize}`);


    // useState Slideshow items' index
    const [activeIndex, setActiveIndex] = useState(0);

    // To update Slideshow items' index
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            // Not to show when items.length < 0
            newIndex = 0;
        } else if (newIndex >= items2.length) {
            // When Slideshow hits the last item
            // It will just go back to 1st item => LOOP
            newIndex = 0;
            //newIndex = items.length -1;
        }
        setActiveIndex(newIndex);
    };

    // Allow Slideshow items to jump every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
          // Increment the active index
          updateIndex(activeIndex + 1);
        }, 3000); // Advance every 3 seconds
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
      }, [activeIndex]); // Re-run the effect when activeIndex changes

    return (
        <div className="root">
            <div 
                className="slideshow"
                style={{
                    width: dimensions.width >= 850 ? slideshowWidthGt : slideshowWidthLt,
                    height: dimensions.width >= 850? slideshowHeightGt : slideshowHeightLt
                    //width: dimensions.width > 1200 ? slideshowWidth : ""
                }}
            >
                <div className="slideshow__inner"
                    style={{
                        transform: `translate(-${activeIndex * 100}%)`
                    }}
                >
                    {items2.map((item, i) => {
                        // Adding 100% will render next image
                        return <SlideshowItem2 
                                    item={item} 
                                    width={"100%"}
                                    dimensions={dimensions}
                                />
                    })}
                </div>

                <div className="slideshow__btn"
                    style={{
                        width: dimensions.width >= 850 ? slideshowWidthGt : slideshowWidthLt,
                    }}
                >
                    {/* 
                        Check out ./public/index.html 
                        Line 12 to 37
                        for usage of Radio button checked usage
                    */}
                    {/* This is for < Arrow Left iOS from Google Fonts */}
                    <button 
                        style={{
                            width: dimensions.width >= 850 ? btnParentWidthGt : btnParentWidthLt,
                            //width: dimensions.width >= 850 ? btnParentWidthGt : btnParentWidthLt, 
                            //height: dimensions.width >= 850 ? btnParentHeightGt : btnParentHeightLt,
                            //visibility: dimensions.width < 800 ? "hidden" : "visible"
                        }}
                        className="slideshow__btn--arrow"
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
                    </button>
                    <div className="indicators"
                        style={{
                            width: dimensions.width >= 850 ? indicatorWidth : indicatorWidth,
                        }}
                    >
                        {/* To relay same number of Radio Buttons Checked 
                        according to number of existing items */}
                        {items2.map((item, index) => {
                            return (
                                <>
                                
                                <button 
                                    className="indicators--btn"
                                    style={{
                                        width: dimensions.width >= 850 ? Math.floor(slideshowWidthGt * 0.06) : Math.floor(slideshowWidthLt * 0.06),
                                    }}
                                    onClick={() => {
                                        // updateIndex with current index
                                        updateIndex(index);
                                    }}
                                >
                                    <span 
                                        className={
                                            `material-symbols-outlined ${
                                                index === activeIndex ? 
                                                "indicator-symbol-active" : 
                                                "indicator-symbol" 
                                            }`
                                        }
                                    >
                                        radio_button_checked
                                    </span>
                                </button>
                                </>
                            );
                        })} 
                    </div>
                    <button 
                        style={{
                            width: dimensions.width >= 850 ? btnParentWidthGt : btnParentWidthLt,
                            //visibility: dimensions.width < 800 ? "hidden" : "visible"
                        }}
                        className="slideshow__btn--arrow"
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        <span class="material-symbols-outlined">arrow_forward_ios</span> 
                    </button>
                </div>

                <div className="slideshow__inner"
                    style={{
                        transform: `translate(-${activeIndex * 100}%)`
                    }}
                >
                    {items2.map((item, i) => {
                        // Adding 100% will render next image
                        return <SlideshowText 
                                    item={item} 
                                    width={"100%"}
                                    dimensions={dimensions}
                                />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Slideshow2;