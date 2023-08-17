import { useSelector } from "react-redux";
import StoreIndex from "../Stores/StoreIndex/StoreIndex";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
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


    return(<div>
        <h1>Order Food To Your Door</h1>
        <input type='text' placeholder='Enter your delivery zip code address'/>
        <button onClick={handleFindFoodClick}>Find Food</button>
        {!sessionUser && <OpenModalButton
          buttonText="Sign In"
          modalComponent={<LoginFormModal />}
        />}

    </div>)
}

export default LandingPage;