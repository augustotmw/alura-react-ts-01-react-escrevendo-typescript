import {ITask} from "../../pages/tasks.interface";
import styles from './tasksList.module.scss';
import TasksListItem from "../TasksListItem";
import {ITasksList} from "./tasksList.interfaces";

function TasksList({ tasks, selectTask }: ITasksList) {
    return (
        <aside className={styles.TasksList}>
            <h2>Tarefas: </h2>
            <ul>
                {tasks.map((task:ITask) => (
                    <TasksListItem key={task.id} { ...{...task, selectTask} } />
                ))}
            </ul>
        </aside>
    )
}

export default TasksList;
