import styles from './tasksChronoClock.module.scss';
import {ITasksChronoClock} from "./tasksChronoClock.interfaces";
import {convertMilisecondsToString} from "../../../../shared/services/time";

export default function TasksChronoClock({ time = 0 }: ITasksChronoClock) {

    const getClockView = () => convertMilisecondsToString(time)
        .split('')
        .map((str:string, index:number)=> (<span key={index} className={
            isNaN(Number(str)) ? styles.clockDivider : styles.clockNumber
        }>{str}</span>))

    return (
        <>{ getClockView() }</>
    )
}
