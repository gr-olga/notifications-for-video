import React from "react";
import {SportEvent} from "../../types";

const NotificationCard = (event: SportEvent) => {
    return (
        <div className="events" key={event.id}>
            <div className="events__title">{event.type}</div>
            <p>time: {event.time}</p>
            <h3> {event.type}</h3>
            {event.player && <p>{event.player}</p>}
            {event.distanceOfShot && <p> {event.distanceOfShot}</p>}
            {event.newScore && <p> New Score : {event.newScore.home} : {event.newScore.away}</p>}
        </div>
    );
}

export default NotificationCard