import {ITask} from "../../pages/tasks.interface";

export interface ITasksList {
    tasks: ITask[];
    selectTask: (selected: ITask | null) => void;
}
