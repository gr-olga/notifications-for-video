import React, {useCallback, useEffect, useState} from "react";
import videoData from '../../../server/videoData.json'
import './../../types'
import {SportEvent} from "../../types";

const App = () => {
    const [events, setEvents] = useState<SportEvent[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentEvent, setCurrentEvent] = useState<SportEvent>({} as SportEvent);
    // console.log('videoData', videoData);

    useEffect(() => {
        setEvents(videoData.events as SportEvent[])
        // console.log('events', events);
    }, []);

    const handleTimeUpdate = useCallback((e: any) => {
        // console.log('e.target.currentTime', Math.floor(e.target.currentTime));
        setCurrentTime(Math.floor(e.target.currentTime));
        const closestEvent = events.find(e => e.time === 3);
        if (closestEvent) console.log('closestEvent', closestEvent);
    }, []);

    useEffect(() => {
        // const closestEvent = events.find(e => e.time === currentTime);
        const closestEvent = events.find((e: SportEvent): boolean => e.time === currentTime);
        if (closestEvent) {
            console.log('closestEvent', closestEvent);
            setCurrentEvent(closestEvent as SportEvent);
            // setTimeout(() => setCurrentEvent(''), 3000);
        }
    }, [currentTime, events]);
    const isObject = (obj: Record<string, any>): boolean => {
        return Object.keys(obj).length > 0
    }

    return (
        <div>
            <h1>Hello, let see the video</h1>
            <video onTimeUpdate={handleTimeUpdate} controls>
                <source src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                        type="video/webm"/>
                <track kind="metadata" src="#" label="Key Stage 3"/>
                {/*{currentEvent && <div className="popup-text">{currentEvent}</div>}*/}
            </video>
            <div className="events">{currentTime}</div>
            {isObject(currentEvent) ? <div>{currentEvent.id}</div> : null}
        </div>
    );
};
export default App