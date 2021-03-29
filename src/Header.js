import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mAuth } from './firebase';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logoutOfApp = () => {
        dispatch(logout());
        mAuth.signOut();
    };

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"/>
                <div className="header__search">
                <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon}/>
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption onClick={logoutOfApp} title="Me" avatar={true} />

            </div>
        </div>
    )
};

export default Header
