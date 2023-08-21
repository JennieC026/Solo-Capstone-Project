import { useSelector } from "react-redux";
import StoreIndex from "../Stores/StoreIndex/StoreIndex";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";

import './LandingPage.css'

function LandingPage(){
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const handleFindFoodClick = (e) => {
        e.preventDefault();
            history.push('/stores');
    }
    if(sessionUser){
        history.push('/stores');
    }


    return(<div className="landing-page-component">
        <div className="landing-page-info-container">
            <div className="landing-page-info">
        <h1>Order Food To Your Door</h1>
        <div className="landing-page-info-input-submit">
        <i class="fa-solid fa-location-dot"></i>
        <input type='text' placeholder='Enter your delivery zip code address' className="landing-page-input"/>
        <button onClick={handleFindFoodClick}>Find Food</button>
        </div>
        {!sessionUser && <div className="landing-page-info-signin">
        <OpenModalButton
          buttonText="Sign In"
          modalComponent={<LoginFormModal />}
        /></div>}
        
        </div>

        </div>
        

    </div>)
}

export default LandingPage;