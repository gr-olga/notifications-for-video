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
    const [notificarionsList, setNotificationsList] = useState<any[]>([]);

    const notificationRemoveDelay: number = 10000;

    useEffect((): void => {
        const obj: Record<string, SportEvent> = {};
        eventsList.forEach((item: SportEvent) => obj[item.time] = item);
        setEventsObj(obj);
    }, [eventsList])

    useEffect((): void => {
        if (eventsObj[time]) {
            const id: string = eventsObj[time].id;
            setNotificationsList([...notificarionsList, <NotificationCard item={eventsObj[time]} key={eventsObj[time].id} /> as any])
            removeNotification(id, notificationRemoveDelay);
        }
    }, [time])

    function removeNotification(id: string, delay: number): void {
        setTimeout(() => {
            //TODO: This doesn't work fully, cause it removes all notifications
            // setNotificationsList(notificarionsList.filter((item: SportEvent): boolean => item.id !== id));
            console.log('should remove a notification with id', id);
        }, delay)
    }

    return (
        <div className={styles.notifications}>
            {notificarionsList}
        </div>
    );
}
