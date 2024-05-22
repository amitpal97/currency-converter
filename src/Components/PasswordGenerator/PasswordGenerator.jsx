import { React, useState } from "react";
import { useCallback } from "react";
import { useEffect, useRef } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
    const [arrLenghth, setarrLenghth] = useState(0);
    const [password, setPassword] = useState("");
    const [character, setcharacter] = useState(false);
    const [number, setNumberAllowed] = useState(false);
    const PasswordRef = useRef(null);

    const passGener = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // debugger
        if (number) str += "0123456789";
        if (character) str += "!@#$%^&*+_-{}[]";

        for (let i = 0; i <= arrLenghth; i++) {
            // console.log("EEEE");

            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
            console.log(pass);
            setPassword(pass);
        }
    }, [arrLenghth, number, character, setPassword]);

    const onCopyClipbord = () => {
        console.log("btn copy click");
        PasswordRef.current?.select();
        // PasswordRef.current?.setSelectionRange(0, 3);
        console.log("PasswordRef.current", PasswordRef.current);
        window.navigator.clipboard.writeText(password);
    };
    useEffect(() => {
        passGener();
    }, [arrLenghth, number, character, passGener]);

    return (
        <>
            <div className="mainWrapper">
                {/* input fild  */}
                <div className="inputfildWrapper">
                    <input
                        type="text"
                        value={password}
                        onChange={() => {
                            setPassword(password);
                        }}
                        ref={PasswordRef}
                    />
                    <button onClick={onCopyClipbord}>copy</button>
                </div>

                {/*range slider and checkobox  */}

                <div className="rangeSliderWrapper">
                    <input
                        type="range"
                        className="sliderVal"
                        min={0}
                        max={20}
                        value={arrLenghth}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setarrLenghth(e.target.value);
                        }}

                    />
                    <p className="rangesliderValue">
                        length
                        <span>({arrLenghth})</span>
                    </p>
                    <input
                        type="checkbox"
                        name="Number"
                        id="numberInput"
                        onChange={() => {
                            setNumberAllowed((prev) => {
                                console.log("numberPrev", prev);
                                return !prev;
                            });
                        }}
                    />
                    <label htmlFor="Number">Numbers</label>
                    <input
                        type="checkbox"
                        name="character"
                        id="character"
                        onChange={() => {
                            setcharacter((prev) => {
                                console.log("chareerPrev", prev);
                                return !prev;
                            });
                        }}
                    />
                    <label htmlFor="character">characters</label>
                </div>
            </div>
        </>
    );
};

export default PasswordGenerator;
