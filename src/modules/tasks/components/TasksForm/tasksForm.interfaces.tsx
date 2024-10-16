import {ITask} from "../../pages/tasks.interface";

export interface ITaskForm {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
