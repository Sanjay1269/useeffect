import React, { useEffect, useState } from 'react'

function UseEffect2() {

    const [count, setcount] = useState(0)
    const [age, setage] = useState(0)
    /* useEffect will get executed when component is mounted to the real dom (similar to componentDidMount
        of class components)*/
    useEffect(() => {
        console.log('componentDidUpdate useEffect executed');

        /* the returned callbackfunction will get execuated when the  components is about to un mount from the react DOM (similat to componentsWillUnmount of class components) */

        return () => {
            console.log('componentDidUpdate useEffect executed');
        }

    }, [])

    useEffect(() => {
        if (count !== 0) {
            console.log('count componentDidUpdate useEffect executed');
        }
    }, [count])//when ever the dependency is getting changed we can execute the callback function so we give dependancy its similar to componentDidUpdate

    useEffect(() => {
        if (count!==0 && age !== 0) {
            console.log('count or age componentDidUpdate useEffect executed');
        }
    }, [count,age])

    useEffect(() => {
        if (age !== 0) {
            console.log('age componentDidUpdate useEffect executed');
        }
    }, [age])

    const increaseCount = () => {
        setcount(count + 1)
    }

    const increaseAge = () => {
        setage(age + 10)
    }

    return (
        <div>
            <p>useEffect 2</p>
            <hr />
            <p>count - {count}</p>
            <button onClick={increaseCount}>Increase count</button>
            <p>Age - {age}</p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}

export default UseEffect2
