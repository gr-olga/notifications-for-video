import React, {useEffect, useState} from "react";
import {TickerItem} from "@/types";
import styles from "./ticker.module.scss";

export default function Ticker(): React.ReactElement {
    const [tickers, setTickers] = useState<TickerItem[]>([]);

    useEffect((): void => {
        fetch('http://localhost:8081/video-data/tickers')
            .then((response: Response) => response.json())
            .then((data: TickerItem[]): void => setTickers(data))
    }, []);

    return (
        <div className={styles.ticker}>
            {tickers.map((item: TickerItem) => {
                return <div className={styles.items}><div className={styles.item}>{item.body}</div></div>;
            })}
        </div>
    );
};


