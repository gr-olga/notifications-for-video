import React from "react";
import {SportEvent} from "@/types";

import styles from "./notificationCard.module.scss"

export default function NotificationCard({item}: { item: SportEvent }) {
    return (
        <div className={styles.events} key={item.id}>
            <div className={styles.event_title}>{item.type}</div>
            {item.player && <p> player:{item.player}</p>}
            {item.distanceOfShot && <p> distanceOfShot: {item.distanceOfShot}</p>}
            {item.newScore && <p> New Score : {item.newScore.home} : {item.newScore.away}</p>}
        </div>
    );
}