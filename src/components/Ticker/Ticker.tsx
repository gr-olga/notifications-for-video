import React, {useEffect, useState} from "react";
import {TickerItem} from "@/types";
import styles from "./ticker.module.scss";

export default function Ticker(): React.ReactElement {
    const [tickers, setTickers] = useState<TickerItem[]>([]);

    useEffect((): void => {
        getTickers()
    }, []);

    async function getTickers(): Promise<void> {
        let response: Response = await fetch('http://localhost:8081/video-data/tickers');
        setTickers(await response.json());
    }

    function getTickersStr(tickers: TickerItem[]): string {
        return tickers.reduce((p: string, c: TickerItem): string => p + ' ' + c.body, '')
    }

    return (
        <div className={styles.ticker}>
            <div className={styles.items}>
                <div className={styles.item}>{getTickersStr(tickers)}</div>
            </div>
        </div>
    );
};


