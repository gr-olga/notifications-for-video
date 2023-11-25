import React, {useEffect, useState} from "react";
import {TickerItem} from "@/types";
import styles from "./ticker.module.scss";

export default function Ticker(): React.ReactElement {
    const [tickers, setTickers] = useState<TickerItem[]>([]);
    const [current, setCurrent] = useState<number>(0);

    useEffect((): void => {
        getTickers().then(() => loopTickers())
    }, []);

    async function getTickers(): Promise<void> {
        let response: Response = await fetch('http://localhost:8081/video-data/tickers');
        setTickers(await response.json());
    }

    function loopTickers(): void {
        setInterval((): void => {
            const val: number = current === tickers.length - 1 ? 0 : current + 1;
            setCurrent(val);
        }, 1000);
    }

    return (
        <div className={styles.ticker}>
            <div className={styles.items}>
                { !!tickers[current] && <div className={styles.item}>{tickers[current].body}</div> }
            </div>
        </div>
    );
};


