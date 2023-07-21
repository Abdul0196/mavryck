import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6"
import "./SubscriptionAlert.css"

const SubscriptionAlert = (props) => {
    return (
        <div className={`subsNotify absolute mx-auto ${props.show ? "show" : ""}`}>
            <button className="close"><FaXmark /></button>
            <img className="mx-auto mb-4" src={`${process.env.PUBLIC_URL}/images/icons/cps-white.svg`} alt="icon" />
            <p className="m-0 font-semibold">To fully access the updated cost scenario, you will need to <Link to="subscribe">subscribe</Link> 
to the premium service.  <Link to="subscribe">Click here</Link> to get limited access.</p>
        </div>
    )
};

export default SubscriptionAlert;
