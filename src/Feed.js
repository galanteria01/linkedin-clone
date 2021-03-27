import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7005f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#7005f9"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#7005f9"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7005f9"/>

                </div>
            </div>
        </div>
    )
}

export default Feed
