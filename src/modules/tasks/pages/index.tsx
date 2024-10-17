import TasksForm from "../components/TasksForm";
import TasksList from "../components/TasksList";
import styles from './tasks.module.scss';
import TasksChrono from "../components/TasksChrono";
import {useCallback, useEffect, useRef, useState} from "react";
import {ITask} from "./tasks.interface";
import {convertStringToMiliseconds} from "../../../shared/services/time";

function Tasks() {
    const [selected, setSelected] = useState<ITask|null>(null);
    const [tasks, setTasks] = useState<ITask[]>([
        {
            id: 'd3524c02-792a-47d2-a955-de60ac175588',
            name: 'item fixo',
            time: '00:00:07',
            completed: false,
            selected: false
        }
    ]);
    const [time, setTime] = useState<number>(0);
    const [timerOn, setTimerOn] = useState<boolean>(false);
    const timeout = useRef<undefined|number>();

    const completeItem = useCallback(() => {
        if (selected) {
            setTasks([
                ...tasks.map(task => (
                    task.id === selected.id ? { ...task, completed: true } : task
                ))
            ]);
            setSelected(null);
            setTime(0);
        }
    }, [selected, tasks]);

    const selectTask = (selected: ITask | null) => {
        setSelected(selected);

        if (!selected?.completed) {
            setTasks(tasks => tasks.map(task => ({
                ...task,
                selected: Boolean(selected?.id === task.id && selected?.selected)
            })));

            setTime(convertStringToMiliseconds(selected?.selected && selected?.time ? selected?.time : ''));
        }
    }

    const startTimer = () => {
        if (selected && !timerOn) {
            setTimerOn(true);
        } else {
            timerOn && setTimerOn(false);

            if (selected) {
                setTime(convertStringToMiliseconds(selected.time));
            }
        }
    }

    const startDecreaseTime = useCallback(() => {
        if (time > 0) {
            timeout.current = setTimeout(() => {
                setTime(time - 1000);
                setTimerOn(true);
            }, 1000) as unknown as number;
        } else {
            setTimerOn(false);
            completeItem();
        }
    }, [timeout, time, completeItem])

    const stopDecreaseTime = useCallback(() => {
        timeout && clearInterval(timeout.current);
    }, [timeout])

    useEffect(()=> {
        if (timerOn) {
            startDecreaseTime();
        } else {
            stopDecreaseTime();
        }
    }, [timerOn, stopDecreaseTime, startDecreaseTime])

    return (
        <section className={styles.TasksStyle}>
            <TasksForm { ...{setTasks} } />
            <TasksList { ...{tasks, selectTask} } />
            <TasksChrono { ...{time, startTimer, timerOn } } />
        </section>
    )
}

export default Tasks;
