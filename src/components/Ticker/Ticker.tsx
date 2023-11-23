import React, {useEffect, useState} from "react";
import {TickerItem} from "@/types";

export default function Ticker(): React.ReactElement {
    const [tickers, setTickers] = useState<TickerItem[]>([]);

    useEffect((): void => {
        fetch('http://localhost:8081/video-data/tickers')
            .then((response: Response) => response.json())
            .then((data: TickerItem[]): void => setTickers(data))
    }, []);
    console.log(tickers)
    return (
        <div>
            {tickers.map((item: TickerItem) => <div>{item.body}</div>)}
        </div>
    );
};


