import { React, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const counterUpdatePlus = (e) => {
        console.log("e", count + 1);
        setCount((prevCount) => {
            console.log("prevCount", prevCount);
            prevCount + 1;
        });
        setCount(count + 1);
    };

    const counterUpdatReducee = (e) => {
        console.log("e", count - 1);
        setCount((prevCount) => {
            console.log("prevCount", prevCount);
            prevCount - 1;
        });
        setCount(count - 1);
    };

    return (
        <>
            <div className="counter">
                <div className="counterPara">{count}</div>
                <button className="btn" onClick={counterUpdatePlus}>
                    click to update counter ++
                </button>

                <button className="btn" onClick={counterUpdatReducee}>
                    click to update counter --
                </button>
            </div>
        </>
    );
}
export default Counter;
