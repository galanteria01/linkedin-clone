import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://img.freepik.com/free-photo/room-with-concrete-floor-smoke-background_9083-2991.jpg?size=626&ext=jpg" alt="header image"/>
                <Avatar />
                <h2>Shoury Sharma</h2>
                <h4>shanuu12e@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed profile</p>
                    <p className="sidebar__statNumber">2,541</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,501</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar;