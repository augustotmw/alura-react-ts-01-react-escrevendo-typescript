import {ITask} from "../../pages/tasks.interface";

export interface ITaskListItem extends ITask {
    selectTask: (selected: ITask) => void;
}
