import React, {useCallback, useEffect, useState} from "react";
import type {SportEvent} from "@/types";
import Notifications from "@/components/Notifications/Notifications";
import Ticker from "@/components/Ticker/Ticker";
import styles from "./app.module.scss";

const App = () => {
    const [eventsList, setEvents] = useState<SportEvent[]>([]);
    const [currentTime, setCurrentTime] = useState<number>(0);

    useEffect((): void => {
        fetch('http://localhost:8081/video-data/events')
            .then((response: Response) => response.json())
            .then((data: SportEvent[]): void => setEvents(data))
    }, []);

    const handleTimeUpdate = useCallback((e: any): void => setCurrentTime(Math.floor(e.target.currentTime)), []);

    return (
        <div className={styles.app}>
            <h1>Hello, let see the video</h1>
            <div className={styles.tickerContainer}><Ticker/></div>
            {eventsList.length > 0 && <Notifications time={currentTime} eventsList={eventsList} /> }
            <video onTimeUpdate={handleTimeUpdate} controls>
                <source src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                        type="video/webm"/>
                <track kind="metadata" src="#" label="Key Stage 3"/>

            </video>
        </div>
    );
};
export default App


