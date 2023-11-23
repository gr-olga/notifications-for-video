import React from "react";
import {SportEvent} from "@/types";

import styles from "./notificationCard.module.scss"


const NotificationCard = (event: SportEvent) => {
    return (
        <div className={styles.events} key={event.id}>
            <div className={styles.event_title}>{event.type}</div>
            {event.player && <p> player:{event.player}</p>}
            {event.distanceOfShot && <p> distanceOfShot: {event.distanceOfShot}</p>}
            {event.newScore && <p> New Score : {event.newScore.home} : {event.newScore.away}</p>}
        </div>
    );
}

export default NotificationCard