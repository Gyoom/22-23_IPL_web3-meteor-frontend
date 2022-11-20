import { useState } from 'react'
import React from 'react';

export const Chat = () => {
    const [newMessage, setNewMessage] = useState('')
  
    const addMessage = ( event ) => {

    }

    const handleAddMessage = ( event ) => {
        setNewMessage(event.target.value)
    }
   

    return (

        <div>
            <form onSubmit={addMessage}>

                <div>Message : <input value={newMessage} onChange={handleAddMessage} /></div>

                <div><button type='submit'>post</button></div>
            </form>
        </div>
    ) 
}