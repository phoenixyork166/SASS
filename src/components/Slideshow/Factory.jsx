import React, {useState, useEffect} from "react";
import "./Slideshow.scss";
import factories from "./factories";
import FactoryItem from "./FactoryItem";

const Factory = () => {
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
    const slideshowWidth = Math.floor(dimensions.width*0.8*0.5);
    //console.log(`slideshowWidth: ${slideshowWidth}`);


    // useState Slideshow items' index
    const [activeIndex, setActiveIndex] = useState(0);

    // To update Slideshow items' index
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            // Not to show when factories.length < 0
            newIndex = 0;
        } else if (newIndex >= factories.length) {
            // When Slideshow hits the last item
            // It will just go back to 1st item => LOOP
            newIndex = 0;
            //newIndex = factories.length -1;
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
                    width: dimensions.width > 1150 ? slideshowWidth : ""
                }}
            >
                <div 
                    className="slideshow__inner"
                    style={{
                        transform: `translate(-${activeIndex * 100}%)`,
                        width: dimensions.width < 850? (dimensions.width * 0.9) : "",
                    }}
                >
                    {factories.map((item, i) => {
                        // Adding 100% will render next image
                        return <FactoryItem 
                                    item={item} 
                                    width={"100%"}
                                    dimensions={dimensions}
                                />
                    })}
                </div>

                <div className="slideshow__btn">
                    {/* 
                        Check out ./public/index.html 
                        Line 12 to 37
                        for usage of Radio button checked usage
                    */}
                    {/* This is for < Arrow Left iOS from Google Fonts */}
                    <button 
                        style={{
                            visibility: dimensions.width < 800 ? "hidden" : "visible"
                        }}
                        className="slideshow__btn--arrow"
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
                    </button>
                    <div className="indicators">
                        {/* To relay same number of Radio Buttons Checked 
                        according to number of existing items */}
                        {factories.map((item, index) => {
                            return (
                                <button 
                                    className="indicators--btn"
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
                            );
                        })} 
                    </div>
                    <button 
                        style={{
                            visibility: dimensions.width < 800 ? "hidden" : "visible"
                        }}
                        className="slideshow__btn--arrow"
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        <span class="material-symbols-outlined">arrow_forward_ios</span> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Factory;