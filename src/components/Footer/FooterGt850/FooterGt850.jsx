import React, {useState, useEffect} from "react";
import './FooterGt850.scss';
import locationImage from "../../../images/location.png";
import callImage from "../../../images/call.png";
import emailImage from "../../../images/email.png";
import circlecImage from "../../../images/circlec.png";

export default function FooterGt850 () {

    return (
        <div className="containerGt row">
                <div className="containerGt__session col-1-of-4">
                    <div className="containerGt__session--img location">
                        <img src={locationImage} alt="Location"
                        /> 
                    </div>
                    <div className="containerGt__session--text">
                        <p>Our Office</p>
                        <p></p>
                        <p></p>
                        <p>Lai Chi Kok, Hong Kong</p>
                    </div>
                </div>
                <div className="containerGt__session col-1-of-4">
                    <div className="containerGt__session--img">
                        <img 
                            src={callImage}
                            alt="Call"
                        />
                    </div>
                    <div className="containerGt__session--text">
                        <p>Call</p>
                        <p>Tel:(852)</p>
                        <p>Fax:(852)</p>
                    </div>                   
                </div>
                <div className="containerGt__session col-1-of-4">
                    <div className="containerGt__session--img">
                        <img 
                            src={emailImage}
                            alt="Email"
                        />
                    </div>
                    <div className="containerGt__session--text">
                        <p>e-mail</p>
                        <p>sales@evertex.com.hk</p>
                    </div>                   
                </div>
                <div className="containerGt__session col-1-of-4">
                    <div className="containerGt__session--img">
                        <img 
                            src={circlecImage}
                            alt="CircleC"
                        />  
                    </div>
                    <div className="containerGt__session--text">
                        <p>2023 by Evertex (H.K.) Limited</p>
                    </div>                   
                </div>
        </div>
    )
}
