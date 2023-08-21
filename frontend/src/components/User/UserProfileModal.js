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

    const handlePastOrderClick = (e) => {
        e.preventDefault();
        alert('Past Order feature coming soon!');
    }

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
                    <div className='user-profile-user-profile-menu'>
                    <div className='user-profile-user-pass-order'>
                        
                            <div className='user-profile-pass-order-icon-title' onClick={handlePastOrderClick}>
                                <i class="fa-solid fa-clipboard-list"></i>
                                <div>Orders</div></div>
                        </div>
                        <div className='user-profile-user-favorite'><i class="fa-solid fa-heart"></i>
                        <div>Favorites</div></div>
                        <button className='user-profile-logout-button' onClick={logout}>Log Out</button>
                        </div>
    
                </div>
            }
            {
                !sessionUser && <div className='user-profile-modal-login-signup-github-button'>
                                        <div className='user-profile-modal-login-signup-button-container'>
                                        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
                     <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal handleSwitchModal={handleSwitchModal}/>}
        />
        
                                        </div>
        <a className="github-link-a" href="https://github.com/JennieC026">
        <div className="github-link">
          <i  className="fa-brands fa-github"></i>
          <div>Jennie Chen</div>
        </div>
      </a>
                </div>
            }
            </div>
       
    )
};

export default UserProfileModal;