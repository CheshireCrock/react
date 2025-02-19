import React, { useState } from "react";

const Stateexample = () => {
    const [count, setCount] = useState(0);
    const [win, setWin] = useState(false);
    const add = () => {
        setCount(count + 1); };
    const minus = () => {
        setCount(count - 1); };
    const reset = () => {
        setCount(0);
    };
   return (
        <div>
            <p>Count: {count} </p>

            <button
            style={{ backgroundColor: win ? "blue" : "yellow"}}
            onClick={add}
            >
                increase
            </button>
            <button
            style={{ backgroundColor: win ? "purple" : "yellow"}}
            onClick={minus}
            >
                decrease
            </button>
            <button
            style={{ backgroundColor: win ? "lightpink" : "yellow"}}
            onClick={reset}
            >
                reset
            </button>
        </div>
    );
};
export default Stateexample;


