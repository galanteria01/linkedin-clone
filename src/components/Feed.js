import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import {database} from '../firebase';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

const Feed = () => {

    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input,setInput] = useState("");
    useEffect( () => {
        database.collection("posts").orderBy('timeStamp','desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ));
    } ,[])

    const sendPost = (e) => {
        e.preventDefault();
        database.collection('posts').add({
            name : user.displayName,
            description : user.email,
            message : input,
            photoUrl: user.photoUrl || "",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7005f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#7005f9"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#7005f9"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7005f9"/>
                </div>
                
            </div>
            <div>
            <FlipMove>
                {posts.map( ({id, data: { name, description, message, photoUrl}}) => (
                    <Post 
                    key= {id}
                    name={name}
                    description= {description}
                    message = {message}
                    photoUrl= {photoUrl}
                    />
                ) )}
            </FlipMove>
                
                
            </div>
        </div>
    )
}  

export default Feed
