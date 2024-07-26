import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import BackgroundChange from "./Components/BackgroundChange";
import PasswordGenerator from "./Components/PasswordGenerator";
import CurrencyConverter from "./Components/currencyConverter";
import CurrencyInput from "./Components/currencyConverter/currencyInput"
import ScreenSenctionLetterPdf from "./Components/ScreenSenctionLatterPdf/ScreenSenctionLatterPdf"

function App() {
    return (
        <>
            {/* <Counter /> */}
            {/* <BackgroundChange /> */}
            {/* <PasswordGenerator /> */}
            <CurrencyConverter />
            {/* <CurrencyInput /> */}
            {/* <ScreenSenctionLetterPdf /> */}
        </>
    );
}

export default App;
