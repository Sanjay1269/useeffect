import React, {useEffect, useState} from 'react'

function useEffect1() {
    const [count, setcount] = useState(0)
    /* never ever write useEffect like this */

    useEffect(() => {
       console.log('useEffect executed');
    },[count])
    const increaseCount = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <p>useEffect 1</p>
            <hr/>
            <p>count - {count}</p>
            <button onClick={increaseCount}>Increase count</button>
        </div>
    )
}

export default useEffect1
