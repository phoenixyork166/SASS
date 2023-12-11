import React, {useState, useEffect} from "react";
import FooterGt850 from '../FooterGt850/FooterGt850';
import FooterLt850 from '../FootLt850/FooterLt850'

export default function Footer() {
    // Monitoring screen resolution
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

    console.log("width: \n", dimensions.width);
    //return (<FooterGt850 />)
    //return (<FooterLt850 />)
    return dimensions.width >= 900 ? <FooterGt850 /> : <FooterLt850 />;

}
