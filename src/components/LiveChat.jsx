import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utills/ChatSlice';
import { generateRandomName, makeRandomMessage } from '../utills/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState();
    const dispatch = useDispatch()
    const chatMessages = useSelector(state => state.chat.messages);

    // useEffect(() => {
    //     const i = setInterval(() => {

    //         dispatch(addMessage({
    //             name: generateRandomName(),
    //             message: makeRandomMessage(20)
    //         }))

    //     }, 1500);

    //     return () => clearInterval(i)

    // }, [])

    /// Handle live chat msg

    const handleLiveChat = (e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: "Akshay Saini",
            message: liveMessage
        }))

        setLiveMessage("")
    }

    const handleChatChange = (e) => {
        setLiveMessage(e.target.value)
    }


    return (
        <>
            <div className='w-full h-[450px] ml-2 p-2  bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {chatMessages.map((c, i) => (
                    <ChatMessage key={i} name={c.name} message={c.message} />
                ))}
            </div>
            <form className="w-full p-2 ml-2  border-black" onSubmit={handleLiveChat}>
                <input type="text" className="px-2 w-96" value={liveMessage} onChange={handleChatChange} />
                <button className="px-2 mx-2 bg-green-100">Send</button>
            </form>


        </>
    )
}

export default LiveChat
