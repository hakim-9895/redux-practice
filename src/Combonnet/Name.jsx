import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { username } from './Userditails'

function Name() {
    const [Username, setUsername] = useState('')
    const [userage, setUserage] = useState('')

    const users = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        // Dispatch the action with updated state
        dispatch(username({ name: Username, age: parseInt(userage) }))
    }

    const handleName = (e) => {
        setUsername(e.target.value)  // Update username state
    }

    const handleAge = (e) => {
        setUserage(e.target.value)  // Update userage state
    }

    return (
        <div>
            <p>{users.name}</p>
            <input
                type='text'
                value={Username}  // Bind to Username state
                onChange={handleName}  // Correct way to pass the event handler
            />
            <input
                type='number'
                value={userage}  // Bind to userage state
                onChange={handleAge}  // Correct way to pass the event handler
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Name
