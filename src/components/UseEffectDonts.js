import React,{useState, useEffect} from 'react';

function UseEffectDonts() {
    const [count,setcount] = useState(0);
    const [age, setage] = useState(0);
    const [person, setperson] = useState({
        fname : 'sanjay',
        age : 26
    });
    //Don't update the state which as passed as dependancy in the same useEffect

/*     useEffect(() => {
        if (count !== 0){
            console.log('count',count);
            setcount(count + 1)
        }
    },[count])

    useEffect(() => {
        if (count !== 0){
            console.log('count',count);
            setage(age + 20)
        }
    },[count])

    useEffect(() => {
        if(person.age !==10){
            const p= { ...person}
            p.age=20
            setperson(p)
        }
    },[person]) */

    const updateCount = () => {
        //dont access the state as soon as the state is updated, updation to state is asynchronous, we will
       // not get the update state in the next line after updating state.

/*         console.log('count before',count);
        setcount(20)
        if(count === 20){
            console.log('count is 20');
        }
        console.log('after count',count); */

        setcount(count + 1)


        // write the logic to be executed in useEffect or store the updateded data in a variable and execute
        //the logic based on that
        /* const updateCount = 20
           setCount(updateCount)

           if(updateCount === 20)
           console.log('count is 20)
         */
    }

    const updateAge = () => {
        setage(20)
    }

    const updatePerson = () => {
        setperson({...person, age:30})
    }


  return <div>
      <p>Count - {count}</p>
      <button onClick={() => {
          updateCount()
      }}>Increase</button>
      <hr/>
      <p>Age - {age}</p>
      <button onClick={() => {
          updateAge()
      }}>Increase</button>
      <hr/>
      <p>Person age- {person.age}</p>
      <button onClick={() => {
          updatePerson()
      }}>update person</button>
  </div>;
}

export default UseEffectDonts;
