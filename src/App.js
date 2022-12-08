import React, { useState } from "react";
import './App.css'

const App=()=>{

    const [result, setResult]=useState("");
    const eventHandler =(e) =>{
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("")

    }
    const backspace = () => {
        setResult(result.slice(0,result.length - 1))

    }
    const calculator = () => {
        try{
            setResult(eval(result).toString());
        }
        catch(err){
            setResult("Error")
        }
    }

    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result}/>
                </form>
                <div className="keypad">
                    <button onClick={clear} id="clear" className="highlight">Clear</button>
                    <button onClick={backspace} id="backspace" className="highlight">C</button>
                    <button name="/" onClick={eventHandler} className="highlight">&divide;</button>
                    <button name="7" onClick={eventHandler} className="">7</button>
                    <button name="8" onClick={eventHandler} className="">8</button>
                    <button name="9" onClick={eventHandler} className="">9</button>
                    <button name="*" onClick={eventHandler} className="highlight">&times;</button>
                    <button name="4" onClick={eventHandler} className="">4</button>
                    <button name="5" onClick={eventHandler} className="">5</button>
                    <button name="6" onClick={eventHandler} className="">6</button>
                    <button name="-" onClick={eventHandler} className="highlight">&ndash;</button>
                    <button name="1" onClick={eventHandler} className="">1</button>
                    <button name="2" onClick={eventHandler} className="">2</button>
                    <button name="3" onClick={eventHandler} className="">3</button>
                    <button name="+" onClick={eventHandler} className="highlight">+</button>
                    <button name="0" onClick={eventHandler} className="">0</button>
                    <button name="." onClick={eventHandler} className="">.</button>
                    <button name="" onClick={calculator} id="result" className="highlight">=</button>


                </div>
            </div>

        </>
    )
}

export default App;

