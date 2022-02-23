import React, { useState, useEffect } from 'react'

const  UseEffect4 =  (props)  => {
    const [isAdmin, setisAdmin] = useState(true)

    useEffect(() => {
        setisAdmin(props.showComponent)
    }, [props.showComponent])

    console.log('rendering useeffect', props.showComponent);
    return (
        <div>
            <p>useEffect 4</p>
            {isAdmin ? 'admin' : 'user'}
        </div>
    )
}

export default UseEffect4
