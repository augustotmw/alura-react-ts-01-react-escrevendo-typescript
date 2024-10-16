import {TasksForm} from "../components/TasksForm";
import TasksList from "../components/TasksList";
import styles from './tasks.module.scss';
import TasksChrono from "../components/TasksChrono";
import {useState} from "react";
import {ITask} from "./tasks.interface";

function Tasks() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const [selected, setSelected] = useState<ITask | null>(null);

    const selectTask = (selected: ITask | null) => {
        setSelected(selected);
        setTasks(tasks => tasks.map(task => ({
            ...task,
            selected: Boolean(selected?.id === task.id  && selected?.selected)
        })))
    }

    return (
        <section className={styles.TasksStyle}>
            <TasksForm { ...{setTasks} } />
            <TasksList { ...{tasks, selectTask} } />
            <TasksChrono />
        </section>
    )
}

export default Tasks;
