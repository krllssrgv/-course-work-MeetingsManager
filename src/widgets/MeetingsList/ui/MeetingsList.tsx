import { useMemo } from 'react';
import { useMeetings } from '../model/useMeetings';
import { Meeting } from '@entities';
import styles from './MeetingsList.module.scss';

export const MeetingsList = () => {
    const { meetings, name } = useMeetings();

    const renderedMeetings = useMemo(() => {
        return meetings.map((meeting) => (
            <Meeting
                key={meeting.id}
                id={meeting.id}
                organizer={meeting.organizerName}
                title={meeting.title}
                place={meeting.place}
                description={meeting.description}
                date={meeting.date}
                time={meeting.time}
            />
        ));
    }, [meetings]);

    return (
        <>
            <div className={styles.headline}>
                Вы находитесь в workspace {name}
                <br />
                {meetings.length ? null : 'Сейчас нет предстоящих встреч'}
            </div>
            {meetings.length ? (
                <div className={styles.meetings}>{renderedMeetings}</div>
            ) : (
                <></>
            )}
        </>
    );
};
