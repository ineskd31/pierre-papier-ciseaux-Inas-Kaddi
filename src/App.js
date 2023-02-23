import Score from "./components/Score";
import Home from "./components/Home";
import Rules from "./components/Rules";
import Jeux from "./components/Jeux";
import { useState } from "react";


function App() {
  
  const [home, sethome] = useState(true);

  const [choix, setChoix] = useState("");

  const [score, setScore] = useState(10);

  return (
    <div className="App">

        <Score score={score}/>

        {home === true ? <Home setHome={sethome} setChoix={setChoix} /> : <Jeux setHome={sethome} choix={choix} setScore={setScore} score={score}/>}
        

        <Rules />

    </div>
  );
}

export default App;
