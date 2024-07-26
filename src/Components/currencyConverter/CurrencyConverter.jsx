import { React, useState, useRef } from "react";
import "./CurrencyConverter.css";
import CurrencyInput from "./currencyInput";
import useCurrencyInfo from "../../CustomHooks/useCurrencyInfo";

const CurrencyConverter = () => {
    const currencyInfo = useCurrencyInfo("USD");
    const options = Object.keys(currencyInfo);
    console.log("curr", currencyInfo);

    const [val, SetVal] = useState({
        amount: 0,
        from: "",
        covertAmount: 0,
        fromTWo: "",
        fromApiVal: 0,
        fromTWoApiVal: 0,
    });

    console.log(val);

    function currencySelectDropValMultiplication() {
        SetVal((prev) => ({
            ...prev,
            covertAmount:
                val.fromApiVal > val.fromTWoApiVal
                    ? val.amount / val.fromApiVal / val.fromTWoApiVal
                    : val.amount * val.fromApiVal * val.fromTWoApiVal,
        }));
        console.log(val.calValOne, "calval");
    }

    function CurrencySwap() {
        SetVal((prev) => ({
            ...prev,
            fromApiVal: val.fromTWoApiVal,
            fromTWoApiVal: val.fromApiVal,
            from :val.fromTWo,
            fromTWo:val.from,
        }));
    }

    function onchangeInputVal(e) {
        SetVal((prevState) => ({
            ...prevState,
            amount: e.target.value,
        }));
        console.log(val.amount);
    }

    function onchangeInputValTwo(e) {
        SetVal((prevState) => ({
            ...prevState,
            covertAmount: e.target.value,
        }));
        console.log(val.amount);
    }

    function currenncySelectVal(e) {
        console.log(e.target.value);
        SetVal((prev) => ({
            ...prev,
            from: e.target.value,
            fromApiVal: currencyInfo[e.target.value],
        }));
    }
    function currenncySelectValTwo(e) {
        console.log(e.target.value);
        SetVal((prev) => ({
            ...prev,

            fromTWo: e.target.value,
            fromTWoApiVal: currencyInfo[e.target.value],
            // covertAmount:
            //     val.amount *
            //     currencyInfo[e.target.value] *
            //     currencyInfo[e.target.value],
        }));
    }

    // propOne = val.firstBoxVal;
    // propOneSelectVal = val.intialVal;
    // propTwo = val.firstBoxVal;
    // propTwoSelectVal = val.intialVal;

    // currencySelectDropValMultiplication();

    return (
        <>
            <div className="maonCurrencyContainor">
                <div className="currencyOneContainer">
                    <CurrencyInput
                        labelFrom="from"
                        labelFromInput={val.amount}
                        onChangeFromInput={onchangeInputVal}
                        labelAmount="Currency Type"
                        labelAmountInput={val.from}
                        onChangeAmountInput={currenncySelectVal}
                        currencyOption={options}
                    />
                    <CurrencyInput
                        labelFrom="from"
                        labelFromInput={val.covertAmount}
                        onChangeFromInput={onchangeInputValTwo}
                        labelAmount="Currency Type"
                        labelAmountInput={val.fromTWo}
                        onChangeAmountInput={currenncySelectValTwo}
                        currencyOption={options}
                    />
                </div>
                <div className="currencyTwoContainer">
                    <button className="para" onClick={CurrencySwap}>
                        Swap
                    </button>
                    <button
                        className="ConvertButton"
                        onClick={currencySelectDropValMultiplication}
                    >
                        Convert {val.from} To {val.fromTWo}
                    </button>
                </div>
            </div>
        </>
    );
};

export default CurrencyConverter;
