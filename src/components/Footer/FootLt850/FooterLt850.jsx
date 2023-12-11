import './FooterLt850.scss';
import locationImage from "../../../images/location.png";
import callImage from "../../../images/call.png";
import emailImage from "../../../images/email.png";
import circlecImage from "../../../images/circlec.png";

export default function FooterLt850 () {
    return (
        <div className="containerLt">
            <div className="containerLt__session">
                <div className="containerLt__session--img">
                    <img 
                        src={locationImage}
                        alt="Location"
                    /> 
                </div>
                <div className="containerLt__session--text">
                    <p>Our Office</p>
                    <p></p>
                    <p></p>
                    <p>Lai Chi Kok, Hong Kong</p>
                </div>
            </div>
            <div className="containerLt__session">
                <div className="containerLt__session--img">
                    <img 
                        src={callImage}
                    />  
                </div>
                <div className="containerLt__session--text">
                    <p>Call</p>
                    <p>Tel:(852)</p>
                    <p>Fax:(852)</p>
                </div>                   
            </div>
            <div className="containerLt__session">
                <div className="containerLt__session--img">
                    <img 
                        src={emailImage}
                        alt="Email"
                    />  
                </div>
                <div className="containerLt__session--text">
                    <p>e-mail</p>
                    <p>sales@evertex.com.hk</p>
                </div>                   
            </div>
            <div className="containerLt__session">
                <div className="containerLt__session--img">
                    <img 
                        src={circlecImage}
                        alt="CircleC"
                    />  
                </div>
                <div className="containerLt__session--text">
                    <p>2023 by Evertex (H.K.) Limited</p>
                </div>                   
            </div>

        </div>
    )
}
