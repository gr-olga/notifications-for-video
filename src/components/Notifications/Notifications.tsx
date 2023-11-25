import React, {useEffect, useState} from "react";
import type {SportEvent} from "@/types";
import NotificationCard from "@/components/NotificationCard/NotificationCard";
import styles from "./notifications.module.scss"

type NotificationsProps = {
    time: number;
    eventsList: SportEvent[];
}

export default function Notifications({time, eventsList}: NotificationsProps) {
    const [eventsObj, setEventsObj] = useState<Record<string, SportEvent>>({});
    const [notificarionsList, setNotificarionsList] = useState<any[]>([]);

    useEffect((): void => {
        const obj: Record<string, SportEvent> = {};
        eventsList.forEach((item: SportEvent) => obj[item.time] = item);
        setEventsObj(obj);
    }, [eventsList])

    useEffect((): void => {
        if (eventsObj[time]) setNotificarionsList([...notificarionsList, <NotificationCard item={eventsObj[time]} /> as any ])
    }, [time])

    return (
        <div className={styles.notifications}>
            {notificarionsList}
        </div>
    );
}
