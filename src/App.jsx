import { useState } from 'react';
import './App.css'
import styles from "./App.module.css";
import Buttoncontainer from './Components/Buttoncontainer';
import Display from './Components/Display';

function App() {
 
   let [calval, setcalval] = useState("");
   const onButtonClick = (buttonText) => {
    if (buttonText === 'c') {
      setcalval("");
    }else if (buttonText === '=') {
      const result = eval(calval);
      setcalval(result);
    }else {
        const newdisplayValue = calval + buttonText;
        setcalval(newdisplayValue);
    }
   };


  return <div className={styles.calc}>
    <Display displayValue={calval}></Display>
    <Buttoncontainer onButtonClick={onButtonClick}>  
    </Buttoncontainer>
  </div>
}

export default App;


/*<div className={styles.calc}>
    <Display></Display>
    <Buttoncontainer></Buttoncontainer>
  </div>*/ 
