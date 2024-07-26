import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, SetData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => SetData(res.rates));
        // console.log("hii", data);
    }, [currency]);
    return data;
}

export default useCurrencyInfo;
