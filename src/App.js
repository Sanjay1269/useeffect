import React, { useState } from "react";
import "./App.css";
import UseEffect1 from "./components/UseEffect1";
import UseEffect2 from "./components/UseEffect2";
import UseEffect4 from "./components/UseEffect4";
import UseEffectDonts from "./components/UseEffectDonts";

function App() {
  const [showComponent, setshowComponent] = useState(true)
  return (
    <div className="App">
      {/* <UseEffect1/> */}
      <button onClick={() => {
        setshowComponent(!showComponent)
      }}>{showComponent ? 'hide' : 'show'}component</button>
      <hr />
      {showComponent ? <UseEffect2 /> : null}
      <hr/>
      <UseEffect4 showComponent={showComponent}/>
      <br/>
      <hr/>
      <UseEffectDonts/>
    </div>
  );
}

export default App;