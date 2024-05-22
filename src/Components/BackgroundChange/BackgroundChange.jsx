import { React, useState } from "react";
import "./BackgroundChange.css";

const BackgroundChange = () => {
    const [newInitalColor, setInitalColor] = useState("#744444");
    function colorChange(e) {
        console.log(e.target.value);
        setInitalColor(e.target.value);
    }

    return (
        <>
                <div style={{ backgroundColor: newInitalColor }}>
                    <input
                        type="color"
                        className="mainContainer"
                        onChange={colorChange}
                    />
                </div>
        </>
    );
};

export default BackgroundChange;
