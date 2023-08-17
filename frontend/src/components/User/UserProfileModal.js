import { useSelector } from 'react-redux';
import OpenLeftSideModalButton from '../OpenModalButton/LeftSide';
import './UserProfileModal.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';


function UserProfileModal(){

    const sessionUser = useSelector(state => state.session.user);
    return(
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
                    <NavLink to='/:userName/orders'>Orders</NavLink>
                    </div>
                    <div className='user-profile-user-favorite'>Favorite</div>

            </div>
    )
};

export default UserProfileModal;