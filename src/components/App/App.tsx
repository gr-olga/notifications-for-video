import React, {useCallback, useEffect, useState} from "react";
import type {SportEvent} from "@/types";
import NotificationCard from "@/components/NotificationCard/NotificationCard";
import Ticker from "@/components/Ticker/Ticker";
import styles from "./app.module.scss";

const App = () => {
    const [events, setEvents] = useState<SportEvent[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentEvents, setCurrentEvents] = useState<SportEvent[]>([]);

    useEffect((): void => {
        fetch('http://localhost:8081/video-data/events')
            .then((response: Response) => response.json())
            .then((data: SportEvent[]): void => setEvents(data))
    }, []);

    const handleTimeUpdate = useCallback((e: any): void => {
        setCurrentTime(Math.floor(e.target.currentTime));
        const closestEvent: SportEvent | undefined = events.find((e: SportEvent): boolean => e.time === 3);
        if (closestEvent) console.log('closestEvent', closestEvent);
    }, []);

    useEffect((): void => {
        const closestEvent: SportEvent | undefined = events.find((e: SportEvent): boolean => e.time === currentTime);
        if (closestEvent) {
            console.log('closestEvent', closestEvent);
            setCurrentEvents([...currentEvents, closestEvent]);
            // setTimeout(() => setCurrentEvent(''), 3000);
        }
    }, [currentTime, events]);

    return (
        <div className={styles.app}>
            <h1>Hello, let see the video</h1>
            <div  className={styles.tickerContainer}><Ticker/></div>
            <video onTimeUpdate={handleTimeUpdate} controls>
                <source src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                        type="video/webm"/>
                <track kind="metadata" src="#" label="Key Stage 3"/>

            </video>
            <div className="events">{currentTime}</div>
            {currentEvents.length > 0 &&
                currentEvents.map((item: SportEvent) => <div>{item.id}</div>)
            }
            {currentEvents.length > 0 &&
                currentEvents.map((item: SportEvent) => NotificationCard(item))
            }
        </div>
    );
};
export default App


