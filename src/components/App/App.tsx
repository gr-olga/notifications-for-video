import React, {useCallback, useEffect, useState} from "react";
import videoData from '../../../server/videoData.json'
import {SportEvent} from "@/types";
import NotificationCard from "@/components/NotificationCard/NotificationCard";


const App = () => {
    const [events, setEvents] = useState<SportEvent[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentEvents, setCurrentEvents] = useState<SportEvent[]>([]);

    useEffect(() => {
        setEvents(videoData.events as SportEvent[])
        // console.log('events', events);
    }, []);

    const handleTimeUpdate = useCallback((e: any) => {
        setCurrentTime(Math.floor(e.target.currentTime));
        const closestEvent = events.find(e => e.time === 3);
        if (closestEvent) console.log('closestEvent', closestEvent);
    }, []);

    useEffect(() => {
        const closestEvent = events.find((e: SportEvent): boolean => e.time === currentTime);
        if (closestEvent) {
            console.log('closestEvent', closestEvent);
            setCurrentEvents([...currentEvents, closestEvent]);
            // setTimeout(() => setCurrentEvent(''), 3000);
        }
    }, [currentTime, events]);
    console.log('currentEvents', currentEvents);

    return (
        <div>
            <h1>Hello, let see the video</h1>
            <video onTimeUpdate={handleTimeUpdate} controls>
                <source src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
                        type="video/webm"/>
                <track kind="metadata" src="#" label="Key Stage 3"/>

            </video>
            <div className="events">{currentTime}</div>
            {currentEvents.length > 0 &&
                currentEvents.map((item: SportEvent) => NotificationCard(item))
            }
        </div>
    );
};
export default App


