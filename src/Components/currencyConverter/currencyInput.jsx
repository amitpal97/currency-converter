import "./currencyInput.css";
import { React, useState, useRef } from "react";

function CurrencyInput({
    currencyOption = [],
    labelFrom,
    labelFromInput,
    onChangeFromInput,
    labelAmount,
    labelAmountInput,
    onChangeAmountInput,
    className = "",
    currencySelectDropValMultiplication= "",
}) {
    // const previousRef = useRef("");

    return (
        <>
            <div className="inputCurrencyOneContainer">
                <div className="inputSubContainer">
                    <p>{labelFrom}</p>
                    <p>{labelAmount}</p>
                </div>
                <div className="inputSubContainerNew">
                    <input
                        // ref={currentRef}
                        onChange={onChangeFromInput}
                        type="text"
                        value={labelFromInput}
                    />
                    <select
                    
                        className="selectOption"
                        name=""
                        id=""
                        onChange={onChangeAmountInput}
                        value={labelAmountInput}
                    >
                        {currencyOption.map((elm) => {
                            // console.log(e);
                            return (
                                <option value={elm} key={elm}>
                                    {elm}
                                </option>
                            );
                        })}
                        <option value="">selectOne</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default CurrencyInput;
