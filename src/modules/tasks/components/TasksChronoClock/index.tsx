import styles from './tasksChronoClock.module.scss';

export default function TasksChronoClock() {
    return (
        <>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockDivider}>:</span>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockDivider}>:</span>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockNumber}>0</span>
        </>
    )
}
