import {TasksForm} from "../components/TasksForm";
import TasksList from "../components/TasksList";
import styles from './tasks.module.scss';
import TasksChrono from "../components/TasksChrono";
import {useState} from "react";
import {ITask} from "./tasks.interface";
import {convertStringToMiliseconds} from "../../../shared/services/time";

function Tasks() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const [time, setTime] = useState<number>(0);

    const selectTask = (selected: ITask | null) => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            selected: Boolean(selected?.id === task.id  && selected?.selected)
        })));

        setTime(convertStringToMiliseconds(selected?.selected && selected?.time ? selected?.time : ''));
    }

    return (
        <section className={styles.TasksStyle}>
            <TasksForm { ...{setTasks} } />
            <TasksList { ...{tasks, selectTask} } />
            <TasksChrono { ...{time} } />
        </section>
    )
}

export default Tasks;
