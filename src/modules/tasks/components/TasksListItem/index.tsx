import styles from './tasksListItem.module.scss';
import {ITaskListItem} from "./taskListItem.interfaces";

export default function TasksListItem(
    {
        name,
        time,
        id,
        completed,
        selected,
        selectTask,
    }: ITaskListItem) {

    const clickItem = () => selectTask({
        name, time, selected: !selected, completed, id
    });

    const isSelected = () => (selected ? styles.selected : '');

    return (
        <li
            className={`${styles.TasksListItem} ${isSelected()}`}
            onClick={clickItem}
        >
            <h3>{ name }</h3>
            <span>{ time }</span>
            <i>{ id }</i>
        </li>
    );
}
