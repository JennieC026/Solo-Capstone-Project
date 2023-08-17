import { useSelector } from 'react-redux';
import OpenLeftSideModalButton from '../OpenModalButton/LeftSide';
import './UserProfileModal.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useHistory } from "react-router-dom";
import { useLeftSideModal } from '../../context/SideModal/LeftSideModal';

function UserProfileModal(){

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const {closeModal} = useLeftSideModal();
    const handleSwitchModal = () => {
        closeModal();

    };

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        closeModal();
        history.push('/');
      };
    return(
        <div className='user-profile-modal-container'>
            {
                sessionUser && 
                <div className='user-profile-modal-container'>
                <div className='user-profile-user-profile-name-container'>
                    <div className='user-profile-user-avatar'>
                        <img src={sessionUser?.photoUrl} alt='user avatar' className='user-profile-user-avatar-img'/>
                        </div>
    
    
                <div className='user-profile-user-name'>
                    {sessionUser?.username}
                    </div>
                    </div>
                    <div className='user-profile-user-pass-order'>
                        <NavLink to='shoppingCarts/past'>Orders</NavLink>
                        </div>
                        <div className='user-profile-user-favorite'>Favorite</div>
                        <button onClick={logout}>Log Out</button>
    
                </div>
            }
            {
                !sessionUser && <div>
                     <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal handleSwitchModal={handleSwitchModal}/>}
        />
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
                </div>
            }
            </div>
       
    )
};

export default UserProfileModal;